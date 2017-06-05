require 'rack'

class RackApplication
  def self.call(env)
    p env
  end
end

Rack::Server.start({
  app: RackApplication
  Port: 3000
  })
