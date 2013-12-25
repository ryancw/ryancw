require 'sinatra'
require 'rufus-scheduler'
require 'net/http'
require 'json'
require 'pry'

class WebApp < Sinatra::Base
  class Weather
    # returns string, 'cloudy', 'rainy'
    def self.get_weather
      puts 'getting weather...'
      url = 'http://api.openweathermap.org/data/2.1/weather/city/4839366'
      resp = Net::HTTP.get_response(URI.parse(url))
      JSON.parse(resp.body)['weather'][0]['main']
    end
  end

  configure do
    set :weather, Weather.get_weather
  end

  get '/' do
    haml :index, format: :html5, locals: {weather: settings.weather}
  end

  scheduler = Rufus::Scheduler.new

  scheduler.every '4h' do
    weather = Weather.get_weather
  end
end

WebApp.run!
