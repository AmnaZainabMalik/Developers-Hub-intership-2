# Cybersecurity Internship Project

## Overview

This project was completed as part of the Cybersecurity Internship (Weeks 4–6). The objective was to implement advanced security controls, identify and remediate vulnerabilities, perform security audits, and prepare a secure application deployment.

---

## Features Implemented

### Week 4: Advanced Threat Detection & Web Security

#### Intrusion Detection & Monitoring

* Configured Fail2Ban for real-time monitoring.
* Automated alerts for multiple failed login attempts.
* Log monitoring and attack detection.

#### API Security Hardening

* Implemented rate limiting using `express-rate-limit`.
* Configured secure CORS policies.
* Protected APIs using API Key Authentication.
* Implemented OAuth-based authentication.

#### Security Headers

* Added Content Security Policy (CSP).
* Enabled HTTP Strict Transport Security (HSTS).
* Added security headers using Helmet middleware.
* Protected against clickjacking and MIME-sniffing attacks.

---

### Week 5: Ethical Hacking & Vulnerability Assessment

#### Reconnaissance

* Performed information gathering on the target application.
* Identified exposed endpoints and services.

#### SQL Injection Testing

* Used SQLMap to test for SQL injection vulnerabilities.
* Secured database queries using prepared statements.
* Applied input validation and sanitization.

#### CSRF Protection

* Implemented CSRF protection using `csurf`.
* Verified protection using Burp Suite.

---

### Week 6: Security Audits & Secure Deployment

#### Security Auditing

Security assessments were performed using:

* OWASP ZAP
* Nikto
* Lynis
* Burp Suite

#### OWASP Top 10 Compliance

The application was reviewed against OWASP Top 10 security risks and appropriate mitigations were applied.

#### Secure Deployment

* Dependency vulnerability scanning.
* Automatic security updates.
* Secure Docker configuration.
* Environment variable protection.
* HTTPS enforcement.

#### Penetration Testing

* Comprehensive penetration testing conducted.
* Vulnerabilities documented and remediated.
* Verification testing performed after fixes.

---

## Technologies Used

* Node.js
* Express.js
* MongoDB / MySQL
* Fail2Ban
* Helmet
* Express Rate Limit
* CORS
* OAuth
* SQLMap
* Burp Suite
* OWASP ZAP
* Nikto
* Lynis
* Docker

---

## Project Structure

```text
project/
│
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   └── config/
│
├── security/
│   ├── fail2ban/
│   ├── audit-reports/
│   └── penetration-tests/
│
├── docs/
│   ├── Security-Audit-Report.pdf
│   └── Project-Documentation.pdf
│
├── tests/
│
├── .env.example
├── package.json
└── README.md
```

---



## Environment Variables

Create a `.env` file:

```env
PORT=5000
DB_URI=your_database_connection_string
JWT_SECRET=your_secret_key
API_KEY=your_api_key
```

---

## Running the Application

Development Mode:

```bash
npm run dev
```

Production Mode:

```bash
npm start
```

---

## Security Controls Implemented

| Security Control         | Status |
| ------------------------ | ------ |
| Rate Limiting            | ✅      |
| API Authentication       | ✅      |
| OAuth Authentication     | ✅      |
| SQL Injection Prevention | ✅      |
| CSRF Protection          | ✅      |
| Content Security Policy  | ✅      |
| HSTS                     | ✅      |
| Secure CORS              | ✅      |
| Fail2Ban Monitoring      | ✅      |
| Security Audits          | ✅      |
| Penetration Testing      | ✅      |

---

## Security Testing Results

| Test                          | Result |
| ----------------------------- | ------ |
| SQL Injection                 | Passed |
| CSRF Protection               | Passed |
| Authentication Testing        | Passed |
| Rate Limiting                 | Passed |
| Security Headers Verification | Passed |
| Penetration Testing           | Passed |

---

## Author

**Amna Zainab Malik**

Cybersecurity Intern

---

## License

This project was developed for educational and internship purposes.
