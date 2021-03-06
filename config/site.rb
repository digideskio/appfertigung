require 'compass'

Compass.configuration do |config|
  # project_path should be the directory to which the sass directory is relative.
  # I think maybe this should be one more directory up from the configuration file.
  # Please update this if it is or remove this message if it can stay the way it is.
  config.project_path = File.dirname(__FILE__)
  config.sass_dir = File.join('src', 'stylesheets')
  config.output_style = ARGV[0] == 'build' ? :compressed : :expanded
  # sass_engine_options returns a hash, you can merge it with other options.
  config.sass_options = Compass.sass_engine_options
end

configuration.haml_options = {
  :format => :html5,
  :attr_wrapper => '"'
}