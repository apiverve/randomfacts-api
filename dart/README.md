# Random Facts API - Dart/Flutter Client

Random Facts is a fun facts API that delivers a random fact on every request without requiring any query parameters. Drop bite-sized trivia into apps, chat widgets, and daily notification feeds.

[![pub package](https://img.shields.io/pub/v/apiverve_randomfacts.svg)](https://pub.dev/packages/apiverve_randomfacts)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is the Dart/Flutter client for the [Random Facts API](https://apiverve.com/marketplace/randomfacts?utm_source=dart&utm_medium=referral&utm_content=readme).

## Installation

Add this to your `pubspec.yaml`:

```yaml
dependencies:
  apiverve_randomfacts: ^1.2.6
```

Then run:

```bash
dart pub get
# or for Flutter
flutter pub get
```

## Usage

```dart
import 'package:apiverve_randomfacts/apiverve_randomfacts.dart';

void main() async {
  final client = RandomfactsClient('YOUR_API_KEY');

  try {
    final response = await client.execute();
    
    print('Status: ${response.status}');
    print('Data: ${response.data}');
  } catch (e) {
    print('Error: $e');
  }
}
```

## Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "fact": "Rhinoceros have 3 toes on each foot"
  }
}
```

## API Reference

- **API Home:** [Random Facts API](https://apiverve.com/marketplace/randomfacts?utm_source=dart&utm_medium=referral&utm_content=readme)
- **Documentation:** [docs.apiverve.com/ref/randomfacts](https://docs.apiverve.com/ref/randomfacts?utm_source=dart&utm_medium=referral&utm_content=readme)

## Authentication

All requests require an API key. Get yours at [apiverve.com](https://apiverve.com?utm_source=dart&utm_medium=referral&utm_content=readme).

## License

MIT License - see [LICENSE](LICENSE) for details.

---

Built with Dart for [APIVerve](https://apiverve.com?utm_source=dart&utm_medium=referral&utm_content=readme)
