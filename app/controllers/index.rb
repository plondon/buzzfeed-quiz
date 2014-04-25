get '/' do
  erb :index
end

post '/' do
  @count = 0
  params.each do |category, value|
    @count += value.to_i
  end
  return @count.to_s
end