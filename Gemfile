# frozen_string_literal: true

source "https://rubygems.org"


gem "jekyll", "~> 4.4"

# ---------------------------------------------------------------------------
#  Plugins
# ---------------------------------------------------------------------------
#
# Anything in the :jekyll_plugins group is required by Jekyll automatically at
# startup. A `gem` line OUTSIDE this group installs the gem and then never
# loads it, which looks exactly like the plugin being broken. Keep new plugins
# in here.
#
# Each one is also listed under `plugins:` in _config.yml. That list is
# redundant for this build (the group above is what actually loads them), and
# it is kept anyway so there is one obvious place to read off what the site
# depends on without parsing a Gemfile.
#
# Versions are pinned because Gemfile.lock is gitignored, so CI re-resolves
# from scratch on every build and an unpinned gem's next major release would
# break the deploy with no commit from us. If the lock ever gets committed,
# these can relax.
group :jekyll_plugins do
  # Ships with Jekyll; listed so `jekyll serve --livereload` is explicit.
  gem "jekyll-watch", "~> 2.2"

  # Writes /sitemap.xml and /robots.txt. Needs the `url` in _config.yml, which
  # is set.
  gem "jekyll-sitemap", "~> 1.4"

  # Writes /feed.xml from _posts. The point is less the feed than what can be
  # pointed at it: an RSS-to-Discord webhook turns publishing a post into
  # announcing it in the server.
  gem "jekyll-feed", "~> 0.17"

  # Tag and category pages (/tags/fps/). Generates nothing until the
  # `jekyll-archives:` block in _config.yml names what to enable, so installing
  # it changes no output on its own.
  gem "jekyll-archives", "~> 2.3"

  # Lets a renamed page keep its old URL via `redirect_from:` in front matter.
  # Cheap insurance: the first LAN page rename otherwise kills every Discord
  # link anyone has ever posted to it.
  gem "jekyll-redirect-from", "~> 0.16"

  # Adds {% include_cached %}, for includes whose output does not depend on the
  # page. Read the note at the bottom of _config.yml before reaching for it:
  # neither nav.html nor head.html qualifies.
  gem "jekyll-include-cache", "~> 0.2"

  # Scaffolding commands, not a build plugin: `bundle exec jekyll post "Title"`
  # writes a correctly-named file with correct front matter, and `jekyll draft`
  # / `jekyll publish` give _drafts a workflow. Here so the next webadmin does
  # not have to hand-copy front matter and guess at the permalink.
  gem "jekyll-compose", "~> 0.12"

  # Minifies the built HTML, CSS and JS. Only runs when JEKYLL_ENV is
  # "production", which both workflows in .github/workflows set; a plain local
  # `jekyll serve` leaves the output readable. Pulls in uglifier, which needs a
  # JS runtime on the build machine; the ubuntu-latest runner has node.
  gem "jekyll-minifier", "~> 0.1"
end

# ---------------------------------------------------------------------------
#  Test
# ---------------------------------------------------------------------------
#
# The Rakefile's :htmlproofer task shells out to this. Declared here so `rake`
# works from a clone, rather than only where it happens to be installed
# globally.
group :test do
  gem "html-proofer", "~> 5.2"
end
