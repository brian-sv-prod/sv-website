source "https://rubygems.org"

# If you want to use GitHub Pages, uncomment the line below
# gem "github-pages", group: :jekyll_plugins

gem "jekyll", "~> 4.2.0"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.15.0"
  gem "jekyll-paginate", "~> 1.1.0"
  gem "jekyll-seo-tag", "~> 2.7.0"
end

# Windows and JRuby does not include zoneinfo files
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock platform for compatibility
gem "bundler"
gem "webrick", "~> 1.7"