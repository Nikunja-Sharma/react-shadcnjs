# SocioX Documentation



## Auth/Register email

**Method**: POST

**URL**: `http://localhost:5000/api/auth/register`

**Headers**:
```
Content-Type: application/json
```

**Body**:
```
{
    "email": "test@example.com",
    "password": "yourpassword123",
    "name": "Test User"
  }
```

---

## Auth/Login email

**Method**: POST

**URL**: `http://localhost:5000/api/auth/register`

**Headers**:
```
Content-Type: application/json
```

**Body**:
```
{
    "email": "test@example.com",
    "password": "yourpassword123",
    "name": "Test User"
  }
```

---

## Auth/ForgotPassword

**Method**: POST

**URL**: `http://localhost:5000/api/auth/forgot-password`

**Headers**:
```
Content-Type: application/json
```

**Body**:
```
{
    "email": "your.email@example.com"
  }
```

---

## Auth/Reset Email Password

**Method**: POST

**URL**: `http://localhost:5000/api/auth/reset-password`

**Headers**:
```
Content-Type: application/json
```

**Body**:
```
{
  "email": "xnikunja@gmail.com",
  "otp": "840907",
  "newPassword": "your-new-password"
}
```

---

## Subscription/get Plans

**Method**: GET

**URL**: `http://localhost:5000/api/subscription/admin/plans`

**Headers**:
```
Content-Type: application/json
```

**Body**:
```
No body
```

---

## Subscription/get Plans by id

**Method**: GET

**URL**: `http://localhost:5000/api/subscription/admin/plans`

**Headers**:
```
Content-Type: application/json
```

**Body**:
```
No body
```

---

## Subscription/update custom features

**Method**: PATCH

**URL**: `http://localhost:5000/api/subscription/admin/plans/67616c378c821544d3c5400b/features`

**Headers**:
```
Content-Type: application/json
Authorization: Bearer YOUR_ADMIN_TOKEN
```

**Body**:
```
{
    "customFeatures": [
      "White label reports",
      "Custom URL shortener",
      "Advanced team permissions",
      "API rate limit increase"
    ]
  }
```

---

## Subscription/create plan

**Method**: POST

**URL**: `http://localhost:5000/api/subscription/admin/plans`

**Headers**:
```
Content-Type: application/json
```

**Body**:
```
{
  "id": "unique-plan-id",
  "name": "premium",
  "displayName": "Premium Plan",
  "price": {
    "monthly": {
      "amount": 29.99,
      "currency": "USD"
    },
    "yearly": {
      "amount": 299.99,
      "currency": "USD",
      "savings": 60
    }
  },
  "features": {
    "socialAccounts": {
      "total": 10,
      "perPlatform": {
        "facebook": 3,
        "instagram": 3,
        "twitter": 4
      }
    },
    "teamMembers": 5,
    "posting": {
      "postsPerDay": 20,
      "bulkScheduling": true,
      "autoScheduling": true
    },
    "analytics": {
      "reportTypes": ["basic", "advanced"],
      "exportFormats": ["pdf", "csv"],
      "retentionDays": 365
    },
    "support": "24/7",
    "additional": {
      "customBranding": true,
      "apiAccess": true,
      "contentCalendar": true,
      "hashtagManager": true
    }
  },
  "recommended": true,
  "category": "enterprise"
}
```

---

## Subscription/update plan

**Method**: PUT

**URL**: `http://localhost:5000/api/subscription/admin/plans/67615fa882f14b0d21c065a3`

**Headers**:
```
Content-Type: application/json
Authorization: Bearer YOUR_JWT_TOKEN
```

**Body**:
```
{
    "name": "basic",
    "displayName": "Basic Plan",
    "price": {
      "monthly": {
        "amount": 29.99,
        "currency": "USD"
      },
      "yearly": {
        "amount": 299.99,
        "currency": "USD",
        "savings": 59.89
      }
    },
    "features": {
      "socialAccounts": {
        "total": 5,
        "perPlatform": {
          "facebook": 2,
          "instagram": 2,
          "twitter": 1
        }
      },
      "teamMembers": 3,
      "posting": {
        "postsPerDay": 10,
        "bulkScheduling": true,
        "autoScheduling": false
      },
      "analytics": {
        "reportTypes": ["basic", "advanced"],
        "exportFormats": ["pdf", "csv"],
        "retentionDays": 30
      },
      "support": "email",
      "additional": {
        "customBranding": false,
        "apiAccess": false,
        "contentCalendar": true,
        "hashtagManager": true
      }
    },
    "recommended": false,
    "category": "basic"
  }
```

---

## Subscription/update plan status

**Method**: POST

**URL**: `http://localhost:5000/api/subscription/admin/plans/67615fa882f14b0d21c065a3/status`

**Headers**:
```
Authorization: Bearer YOUR_ADMIN_JWT_TOKEN
Content-Type: application/json
```

**Body**:
```
{
    "status": "active"
  }
```

---

## Subscription/delete plan

**Method**: DELETE

**URL**: `http://localhost:5000/api/subscription/admin/plans/67615fa882f14b0d21c065a3`

**Headers**:
```
Authorization: Bearer YOUR_ADMIN_JWT_TOKEN
Content-Type: application/json
```

**Body**:
```
{
    "status": "inactive"
  }
```

---

## Subscription/update both  features

**Method**: PUT

**URL**: `http://localhost:3000/api/subscriptions/plan-features/64f5a7b1c25a`

**Headers**:
```
Content-Type: application/json
Authorization: Bearer YOUR_ADMIN_TOKEN
```

**Body**:
```
{
    "features": {
      "socialAccounts": {
        "total": 15,
        "perPlatform": {
          "facebook": 5,
          "instagram": 5,
          "twitter": 5
        }
      },
      "teamMembers": 10,
      "posting": {
        "postsPerDay": 50,
        "bulkScheduling": true,
        "autoScheduling": true
      },
      "analytics": {
        "reportTypes": ["basic", "advanced"],
        "exportFormats": ["pdf", "csv"],
        "retentionDays": 90
      },
      "support": "priority"
    },
    "customFeatures": [
      "White label reports",
      "Custom URL shortener",
      "Advanced team permissions"
    ]
  }
```

---

## Subscription/update  standard feature

**Method**: PUT

**URL**: `http://localhost:3000/api/subscriptions/plan-features/64f5a7b1c25a`

**Headers**:
```
Content-Type: application/json
Authorization: Bearer YOUR_ADMIN_TOKEN
```

**Body**:
```
{
    "features": {
      "socialAccounts": {
        "total": 15,
        "perPlatform": {
          "facebook": 5,
          "instagram": 5,
          "twitter": 5
        }
      },
      "teamMembers": 10,
      "posting": {
        "postsPerDay": 50,
        "bulkScheduling": true,
        "autoScheduling": true
      },
      "analytics": {
        "reportTypes": ["basic", "advanced"],
        "exportFormats": ["pdf", "csv"],
        "retentionDays": 90
      },
      "support": "priority"
    },
    "customFeatures": [
      "White label reports",
      "Custom URL shortener",
      "Advanced team permissions"
    ]
  }
```

---

## Admin/Admin Login

**Method**: POST

**URL**: `http://localhost:5000/api/admin/login`

**Headers**:
```
Content-Type: application/json
```

**Body**:
```
{"email":"your.email@example.com","password":"your_secure_password"}
```

---

## Admin/Get List of users

**Method**: GET

**URL**: `http://localhost:5000/api/admin/users?page=1&limit=10&sort=createdAt&order=desc&search=john&authSource=self`

**Headers**:
```
Content-Type: application/json
```

**Body**:
```
{"email":"your.email@example.com","password":"your_secure_password"}
```

---

## Admin/User delete

**Method**: DELETE

**URL**: `http://localhost:5000/api/admin/users/675bd3220bfee16d58204fe8`

**Headers**:
```

```

**Body**:
```
{
    "name":"Nikunja",
    "email":"xnikunja@gmail.com",
    "picture":"dsafsd"
}
```

---

## Admin/Deactivate User

**Method**: GET

**URL**: `http://localhost:5000/api/admin/users/6761443efbceffa2810be4be/deactivate`

**Headers**:
```

```

**Body**:
```
{
    "name":"Nikunja",
    "email":"xnikunja@gmail.com",
    "picture":"dsafsd"
}
```

---

## Admin/assign subscribtion

**Method**: GET

**URL**: `N/A`

**Headers**:
```

```

**Body**:
```
No body
```

---

## user/user by id

**Method**: GET

**URL**: `http://localhost:5000/api/users/675bd3220bfee16d58204fe8`

**Headers**:
```

```

**Body**:
```
No body
```

---

## user/update profile

**Method**: PUT

**URL**: `http://localhost:5000/api/users/675bd3220bfee16d58204fe8/profile`

**Headers**:
```

```

**Body**:
```
{
    "name":"Nikunja",
    "email":"xnikunja@gmail.com",
    "picture":"dsafsd"
}
```

---

## user/delete User

**Method**: POST

**URL**: `http://localhost:5000/api/users/delete`

**Headers**:
```

```

**Body**:
```
{
    "name":"Nikunja",
    "email":"xnikunja@gmail.com",
    "picture":"dsafsd"
}
```

---

## user/confim delete user

**Method**: POST

**URL**: `http://localhost:5000/api/users/confirm-delete`

**Headers**:
```

```

**Body**:
```
{
    "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzYxNDAxODRkNGE2NjJiMjVkZTc1MTgiLCJpYXQiOjE3MzQ0MjY2NjUsImV4cCI6MTczNDQzMDI2NX0.sEFZye1spypGkzc6pIIOwh_x7Xg6qMN3Woaw3wqowm0"
}
```

---

