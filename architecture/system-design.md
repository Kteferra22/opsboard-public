# OpsBoard — System Architecture

## System Purpose

OpsBoard is an internal operations dashboard designed to manage employees and operational tasks from a centralized interface.

The system allows administrators to:

* manage employee records
* track task status
* monitor operational metrics
* update internal data in real time

The architecture is designed around a **lightweight serverless stack** to minimize infrastructure complexity.

---

# High-Level System Architecture

```
Client Application (React Dashboard)
        │
        │ UI Events
        ▼
Application Logic Layer
        │
        │ Database Queries
        ▼
Supabase Platform
        │
        ├ PostgreSQL Database
        └ Authentication Service
```

The system uses a **client-driven architecture** where the frontend controls data operations through a serverless backend.

---

# Client Layer

### Technologies

* React
* TypeScript
* TailwindCSS

### Responsibilities

The client application handles:

* dashboard UI rendering
* user interactions
* form submission
* data filtering and sorting
* dashboard metric calculations

Key interface modules include:

Dashboard Module
Employee Management Module
Task Management Module

The client communicates directly with Supabase for all data operations.

---

# Application Logic Layer

The application logic layer exists within the client and coordinates how operational data is processed.

Primary responsibilities:

* employee CRUD operations
* dashboard KPI calculations
* task status updates
* filtering and search logic

Example operations include:

```
Create Employee
Update Employee
Delete Employee
Fetch Employee Records
Update Task Status
Calculate Dashboard Metrics
```

This logic ensures that UI components remain simple and reusable.

---

# Data Layer

The system stores operational data in a PostgreSQL database managed by Supabase.

Primary data entities include:

### Employees

Fields:

* id
* name
* department
* role
* created_at

### Tasks

Fields:

* id
* title
* status
* assigned_employee_id
* created_at

Relationships:

```
Employee
   │
   └── assigned_employee_id
          │
          ▼
        Tasks
```

This allows tasks to be associated with specific employees.

---

# Authentication Layer

User authentication is handled by Supabase Authentication.

Authentication flow:

```
User Login
        │
        ▼
Supabase Authentication
        │
        ▼
Session Token
        │
        ▼
Authorized Dashboard Access
```

This ensures only authorized users can access operational data.

---

# Dashboard Processing Layer

The dashboard aggregates operational data into key metrics.

Example dashboard metrics:

* total employees
* total tasks
* tasks in progress
* completed tasks

Processing example:

```
Task Data
        │
        ▼
Status Filtering
        │
        ▼
Metric Calculation
        │
        ▼
Dashboard KPI Display
```

These metrics allow administrators to quickly understand operational status.

---

# Data Flow Example

Example employee creation flow:

```
User Submits Employee Form
        │
        ▼
Client Validation
        │
        ▼
Supabase Insert Query
        │
        ▼
Database Update
        │
        ▼
Dashboard Refresh
```

This approach enables real-time updates in the dashboard UI.

---

# Deployment Model

```
Frontend Application
(Static Hosting)

        │
        ▼

Supabase Platform

        ├ PostgreSQL Database
        ├ Authentication
        └ API Access
```

This architecture removes the need for a dedicated backend server.

---

# Architectural Characteristics

The system architecture prioritizes:

* minimal infrastructure
* maintainable frontend logic
* scalable database layer
* secure authentication

Because the backend is serverless, the system can scale without requiring manual infrastructure management.

---

# Future Architecture Extensions

Potential architectural improvements include:

* role-based access control
* operational analytics dashboards
* activity logging systems
* API-based integrations with external tools

The current architecture is intentionally simple so additional modules can be layered without major system redesign.
