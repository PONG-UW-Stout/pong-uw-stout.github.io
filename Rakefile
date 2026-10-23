# frozen_string_literal: true

require "rake"
require "yaml"

# ---------------------------------------------------------------------------
#  Tasks
# ---------------------------------------------------------------------------
#
#   rake              build, then every check. What CI runs on a pull request.
#   rake build        jekyll build
#   rake htmlproofer  broken links, images and scripts in _site
#   rake validate     _data sanity: parseable YAML, social types that exist,
#                     image paths that exist
#   rake images       size guard on images added or changed vs main
#
# `validate` and `images` read the source tree, not _site, so they do not
# depend on :build and are fast to run on their own while editing _data.

task default: %i[build htmlproofer validate images]

task :build do
  sh "bundle exec jekyll build"
end

# --ignore-urls skips the "Share by email" button built in
# _includes/social-share.html, which is a recipient-less "mailto:?subject=..."
# so the visitor picks who to send it to. That is correct for a share link, but
# html-proofer reads every mailto: as needing an address and fails it.
task :htmlproofer => :build do
  sh "htmlproofer ./_site --disable-external --checks 'Links,Images,Scripts' " \
     "--ignore-urls '/^mailto:/'"
end

# ---------------------------------------------------------------------------
#  rake validate
# ---------------------------------------------------------------------------
#
# _data is the part of this site that gets edited by whoever is running PONG
# that semester, usually by copying a neighbouring block and changing the
# names. The three things that go wrong when you do that are all silent:
#
#   * YAML that does not parse. Jekyll warns and carries on with the file
#     EMPTY, so the exec grid just quietly loses everybody.
#   * a `type:` with no matching key in _data/socials.yml. The person card
#     renders a link with no icon and no colour.
#   * a `photo:` or `logo:` pointing at a file that is not in assets/images.
#     html-proofer catches this one, but only for pages that are built, and the
#     message points at _site rather than the line you have to fix.
#
# None of those break the build, so none of them get noticed until somebody
# looks at the live page. This turns all three into a failed check instead.
task :validate do
  socials = YAML.load_file("_data/socials.yml")
  known_types = socials.keys
  problems = []

  Dir["_data/*.yml"].sort.each do |file|
    begin
      data = YAML.load_file(file)
    rescue Psych::SyntaxError => e
      problems << "#{file}: YAML does not parse: #{e.message}"
      next
    end

    # _data/socials.yml is the lookup table itself, so it has no `type:` keys
    # to check against anything.
    next if file.end_with?("socials.yml")

    walk = lambda do |node, trail|
      case node
      when Hash
        label = node["name"] || trail
        if node["type"] && !known_types.include?(node["type"])
          problems << "#{file}: #{label} has social type '#{node["type"]}', " \
                      "which is not a key in _data/socials.yml " \
                      "(known: #{known_types.sort.join(", ")})"
        end
        %w[photo logo banner].each do |key|
          value = node[key]
          next unless value.is_a?(String) && !value.empty?
          path = value.sub(%r{\A/}, "")
          unless File.exist?(path)
            problems << "#{file}: #{label} has #{key}: #{value}, " \
                        "but that file does not exist"
          end
        end
        node.each { |k, v| walk.call(v, "#{label} > #{k}") }
      when Array
        node.each_with_index { |v, i| walk.call(v, "#{trail}[#{i}]") }
      end
    end

    walk.call(data, File.basename(file))
  end

  if problems.empty?
    puts "validate: _data is clean (#{Dir["_data/*.yml"].size} files checked)"
  else
    problems.each { |p| warn "  #{p}" }
    abort "validate: #{problems.size} problem(s) in _data"
  end
end

# ---------------------------------------------------------------------------
#  rake images
# ---------------------------------------------------------------------------
#
# Why this exists: /about renders every exec, staff, mentor and advisor photo
# plus every sponsor logo in one page, which came to about 21 MB of PNG before
# anyone started measuring, because photos go in at whatever size the camera or
# the cropping tool produced.
#
# This only looks at images ADDED OR CHANGED against the base branch, so the
# ones already in the repo are grandfathered in and a routine PR is not
# blocked by somebody else's 18 MB schedule. The limits apply to whatever you
# are adding right now.
#
# Set BASE_REF to compare against something other than origin/main. With no
# git history to compare to (a shallow clone, say) the task says so and passes
# rather than failing for the wrong reason.
# Both are powers of two so they print back as the round numbers they are.
FAIL_BYTES = 1_048_576  # 1 MB: refuse outright
WARN_BYTES = 307_200    # 300 KB: fine for a banner, big for a headshot

task :images do
  base = ENV["BASE_REF"] || "origin/main"

  unless system("git rev-parse --verify --quiet #{base} > /dev/null")
    puts "images: no #{base} to compare against, skipping"
    next
  end

  changed = `git diff --name-only --diff-filter=AM #{base}...HEAD -- assets/images`
            .split("\n")

  # Anything staged or still in the working tree counts too, so the check is
  # useful before a commit exists.
  changed += `git status --porcelain -- assets/images`
             .split("\n").map { |l| l[3..].to_s.strip }

  changed = changed.uniq.reject(&:empty?).select { |f| File.exist?(f) }

  if changed.empty?
    puts "images: no images added or changed vs #{base}"
    next
  end

  oversized = []
  heavy = []

  changed.sort.each do |file|
    bytes = File.size(file)
    if bytes > FAIL_BYTES
      oversized << [file, bytes]
    elsif bytes > WARN_BYTES
      heavy << [file, bytes]
    end
  end

  fmt = ->(bytes) { format("%.2f MB", bytes / 1_048_576.0) }

  heavy.each do |file, bytes|
    puts "  warn: #{file} is #{fmt.call(bytes)}, consider resizing or WebP"
  end

  # The failures below go to stderr. Without this the two streams interleave
  # and the warnings can land after the abort message.
  $stdout.flush

  if oversized.empty?
    puts "images: #{changed.size} image(s) checked, none over #{fmt.call(FAIL_BYTES)}"
  else
    oversized.each do |file, bytes|
      warn "  #{file} is #{fmt.call(bytes)}, over the #{fmt.call(FAIL_BYTES)} limit"
    end
    warn ""
    warn "  Photos on /about are displayed a few hundred pixels wide. Resize to"
    warn "  roughly 2x the displayed size and save as WebP, or PNG if it needs"
    warn "  transparency:"
    warn ""
    warn "    magick input.png -resize 800x800\\> -strip output.webp"
    warn ""
    abort "images: #{oversized.size} image(s) over the size limit"
  end
end
