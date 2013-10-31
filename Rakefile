require "rubygems"
require "bundler"
Bundler.setup

ssh_user      = "appferti@cetus.uberspace.de" # for rsync deployment
document_root = "/home/appferti/html" # for rsync deployment

desc "Run the preview server at http://localhost:4567"
task :preview do
  system "middleman server"
end

desc "Build the site from source"
task :build do
  puts "*** Building the site ***"
  status = system("middleman build --clean")
  puts
  puts status ? "*** OK ***" : "!!! FAILED !!!"
end

desc "Deploy website via rsync"
task :deploy do
  puts "*** Deploying the site via rsync to #{ssh_user}:#{document_root} ***"
  system("rsync -avz --delete build/ #{ssh_user}:#{document_root}")
end

desc "Build and deploy"
task :build_deploy => [:build, :deploy] do
end
