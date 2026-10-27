Pod::Spec.new do |s|
  s.name             = 'APIVerveRandomFacts'
  s.version          = '1.2.3'
  s.summary          = 'Random Facts is a fun facts API that delivers a random fact on every request without requiring any query parameters.'
  s.description      = <<-'DESC'
Random Facts is a fun facts API that delivers a random fact on every request without requiring any query parameters. Drop bite-sized trivia into apps, chat widgets, and daily notification feeds.

This iOS/macOS SDK provides a convenient way to access the Random Facts from APIVerve.
Supports both callback-based and async/await patterns.
                       DESC

  s.homepage         = 'https://apiverve.com/marketplace/randomfacts?utm_source=cocoapods&utm_medium=referral&utm_content=homepage'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'APIVerve' => 'hello@apiverve.com' }
  # The SDK repo holds every language; the pod lives under cocoapods/ with its own tag.
  s.source           = { :git => 'https://github.com/apiverve/randomfacts-api.git', :tag => "cocoapods/v#{s.version}" }

  s.ios.deployment_target = '15.0'
  s.osx.deployment_target = '12.0'

  s.swift_version = '5.0'

  s.source_files = 'cocoapods/Sources/APIVerveRandomFacts/**/*.swift'

  s.frameworks = 'Foundation'

  # APIResponse, APIVerveError and the request plumbing, shared by every APIVerve pod.
  s.dependency 'APIVerveCore', '~> 1.2'
end
