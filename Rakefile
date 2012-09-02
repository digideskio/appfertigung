# stolen from
# https://github.com/adamstac/staticmatic-bootstrap/blob/master/Rakefile
require "rubygems"
require "bundler"
Bundler.setup

ssh_user      = "appferti@cetus.uberspace.de"    # for rsync deployment
document_root = "/home/appferti/html" # for rsync deployment

desc "Runs preview"
task :preview do
  system "staticmatic preview ."
end

desc "Builds the site"
task :build => 'styles:clear' do
  puts "*** Building the site ***"
  system "staticmatic build ."
end

desc "Clears and generates new styles, builds and deploys"
task :deploy => :build do
  puts "*** Deploying the site ***"
  system("rsync -avz --delete site/ #{ssh_user}:#{document_root}")
end

namespace :styles do

  desc "Clears the styles"
  task :clear do
    puts "*** Clearing styles ***"
    system "rm -Rfv site/stylesheets/*"
  end

  desc "Generates new styles"
  task :generate => :clear do
    puts "*** Generating styles ***"
    system "compass compile"
  end

end

desc 'Generate a new project at dir=foo'

task :generate do
  # Generate the new 'dir' if it's not already created
  system "mkdir #{(ENV['dir'])}" unless File.exists?(ENV['dir'])

  # Archive the current HEAD to 'dir'
  system "git archive HEAD | (cd #{ENV['dir']} && tar -xvf -)"

  # Remove this rake task from the newly generated project
  system "cd #{ENV['dir']}; rm #{File.join("tasks", "generate.rake")}"

  puts "\n *** A new project has been generated at: #{(ENV['dir'])} ***"
end
