# Python Flask Simple API

Simple REST API built with Flask for buildpack deployment.

## Endpoints

- `GET /` - Home page
- `GET /api/hello` - Hello message (JSON)
- `GET /health` - Health check
- `GET /api/info` - API information

## Local Development
```bash
# Install dependencies
pip install -r requirements.txt

# Run application
python app/main.py

# Or with gunicorn
gunicorn app.main:app
```

## Deploy with Buildpacks

This app is ready to deploy with any buildpack-compatible PaaS (Heroku, Railway, Render, etc.)

The buildpack will automatically detect Python and install dependencies.

## Testing
```bash
pytest tests/
```
```

---

## 2. Node.js Express
```
nodejs-express-simple/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── app.js
│   └── server.js
├── tests/
│   └── app.test.js
├── public/
│   ├── index.html
│   └── style.css
├── .gitignore
├── README.md
├── package.json
└── Procfile