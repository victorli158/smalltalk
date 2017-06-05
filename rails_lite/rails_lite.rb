app = Proc.new do |env|
  req = Rack::Request.new(env)
  res = Rack::Response.new
  res['Content-Type'] = 'text/html'
  res.write("Hello world!")
  res.finish
end

# Rack::Server.start(
#   app: Proc.new do |env|
#     ['200', {'Content-Type' => 'text/html'}, ['hello world']]
#   end
# )

#Using Rack to start a web server and telling it the app we are going
#to use is the proc

#Setting the Content-Type header tells the browser what
#ther server has given to it in response

#User Rack::Response#write to put things in the response
#Finally call Rack::Response#finish when the res is
#done being built - tells Rack to wrap everything up

Rack::Server.start(
  app: app, #To have a functioning web app
  Port: 3000
)
