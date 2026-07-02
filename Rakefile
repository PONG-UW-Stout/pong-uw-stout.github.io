# frozen_string_literal: true

require "rake"

task default: [:build, :yamllint, :frontmatter, :htmlproofer]

task :build do
  sh "bundle exec jekyll build"
end

task :yamllint do
  sh 'yamllint -d "{extends: default, rules: {line-length: disable}}" .'
end

task :frontmatter => :build do
  sh <<~PYTHON
    python3 - <<'EOF'
    import sys, glob, frontmatter

    REQUIRED_KEYS = ["layout", "date", "author", "description"]
    CONTENT_GLOBS = ["_posts/**/*.md"]

    failures = []
    for pattern in CONTENT_GLOBS:
        for path in glob.glob(pattern, recursive=True):
            post = frontmatter.load(path)
            missing = [k for k in REQUIRED_KEYS if k not in post.metadata]
            if missing:
                failures.append((path, missing))

    if failures:
        for path, missing in failures:
            message = (
                f"::error file={path}::"
                f"Missing front matter key(s): "
                f"{', '.join(missing)}"
            )
            print(message)
        sys.exit(1)
    EOF
  PYTHON
end

task :htmlproofer => :build do
  sh "htmlproofer ./_site --disable-external --checks 'Links,Images,Scripts'"
end