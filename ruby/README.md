# Random Facts API - Ruby Gem

Random Facts is a fun facts API that delivers a random fact on every request without requiring any query parameters. Drop bite-sized trivia into apps, chat widgets, and daily notification feeds.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_randomfacts'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_randomfacts
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_randomfacts'

# Initialize the client
client = APIVerve::Randomfacts::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({  })
  puts response["data"]
rescue APIVerve::Randomfacts::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Randomfacts::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Randomfacts::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "fact": "Rhinoceros have 3 toes on each foot"
  }
}
```

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/randomfacts?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/randomfacts?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/randomfacts?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
