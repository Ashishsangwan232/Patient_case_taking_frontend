# SIH 26047 — AI Agent Rules

## Project Context

This project is being developed for Smart India Hackathon (SIH) Problem Statement 26047 — Patient Case-Taking Software.

The project contains frontend and backend applications in a single repository.

The codebase may contain sensitive healthcare-related information in the real deployment environment.

AI-generated code must prioritize:

* correctness
* privacy
* security
* maintainability
* minimal changes
* clear separation of responsibilities

---

## 1. Never Work Directly on `main`

Never make changes directly on the `main` branch.

Use a task-specific branch:

```text
feature/<name>
fix/<name>
refactor/<name>
```

Examples:

```text
feature/patient-registration
feature/case-taking-form
feature/patient-api
feature/ocr-prescription
fix/authentication
```

---

## 2. One Feature / Task Per Branch

Do not combine unrelated work.

Bad:

```text
feature/patient-system
```

containing:

* patient registration
* OCR
* dashboard redesign
* database migration
* authentication changes

Good:

```text
feature/patient-registration
feature/prescription-ocr
feature/patient-dashboard
```

---

## 3. AI Must Minimize Its Change Scope

Before making changes, determine which files are actually required.

The AI agent MUST NOT:

* modify unrelated files
* perform unnecessary refactoring
* rewrite existing modules unnecessarily
* change the architecture without approval
* change dependencies without a reason
* modify configuration files unnecessarily
* delete existing functionality without explicit instruction

If a task requires 3 files, do not modify 30 files.

---

## 4. AI Must Inspect Before Editing

Before implementing a feature:

1. Inspect the existing project structure.
2. Find existing related components/services/modules.
3. Reuse existing functionality where appropriate.
4. Understand the API/data model.
5. Identify files that will be modified.
6. Only then implement the change.

Do not create duplicate implementations.

---

## 5. Healthcare Data Rules

Treat all patient information as sensitive.

Never hard-code:

* patient names
* phone numbers
* addresses
* medical records
* medical history
* authentication credentials
* API keys
* database credentials
* access tokens

Do not create fake real-person medical data in source code.

Use clearly identified mock/demo data for development.

Never commit `.env` files or secrets.

---

## 6. Frontend / Backend Separation

Frontend code belongs inside:

```text
frontend/
```

Backend code belongs inside:

```text
backend/
```

Do not place backend logic inside frontend components.

Do not place UI logic inside backend services.

The frontend should communicate with the backend through defined APIs.

---

## 7. Feature Ownership

Prefer organizing code by feature.

Frontend:

```text
frontend/src/features/

patient/
case-taking/
consultation/
authentication/
```

Backend:

```text
backend/src/modules/

patient/
case-taking/
consultation/
authentication/
```

When implementing a feature, keep related code close together.

---

## 8. API Contract Rule

Before changing an API used by the frontend, inspect its current contract.

Consider:

```text
HTTP method
endpoint
request body
response body
status codes
error format
authentication
```

Do not silently break an existing API.

If an API changes, update:

```text
docs/API.md
```

and notify the frontend developer.

---

## 9. Database Changes

Database schema changes require extra caution.

Before modifying:

```text
schema
models
migrations
relationships
```

check whether another teammate is working on the database.

Do not casually rename or delete existing fields.

If a database migration is required, clearly document it.

---

## 10. Shared Files

These files are high-conflict files:

```text
package.json
package-lock.json
yarn.lock
pnpm-lock.yaml
App.*
routing configuration
global state
database schema
API configuration
environment configuration
```

If an AI agent needs to modify one of these files, modify only what is necessary.

Do not reformat or rewrite the entire file.

---

## 11. Before AI Coding

Run:

```bash
git status
```

Make sure there are no unexpected changes.

If there are existing uncommitted changes, DO NOT overwrite them.

Ask the developer before modifying files containing unrelated uncommitted work.

---

## 12. After AI Coding

Always inspect:

```bash
git status
git diff
```

Check:

* Which files changed?
* Were unexpected files modified?
* Was existing code deleted?
* Were dependencies added?
* Were configuration files changed?
* Were secrets introduced?
* Did the agent modify another team's area?

Do not commit blindly.

---

## 13. Avoid Giant AI Changes

Do not ask the agent to:

> "Build the entire patient case-taking system."

Instead use small tasks:

```text
Implement patient registration API.

Only modify:
backend/src/modules/patient/

Do not modify authentication, database configuration,
or unrelated modules.
```

Then:

```text
Implement the patient registration form.

Only modify:
frontend/src/features/patient/
```

Small tasks are easier to review and merge.

---

## 14. Same File Conflict

If another teammate is actively modifying a file, do not overwrite their work.

If both tasks require the same file:

1. Communicate with the teammate.
2. Decide who modifies which section.
3. Or temporarily coordinate the changes.
4. Review the final diff carefully.

Never assume another developer's uncommitted changes are disposable.

---

## 15. Pull Requests

Every feature should ideally go through:

```text
Branch
   ↓
Implementation
   ↓
AI diff review
   ↓
Testing
   ↓
Push
   ↓
Pull Request
   ↓
Teammate review
   ↓
Merge
```

PRs should explain:

```text
What changed?
Why?
Which files/modules changed?
How was it tested?
```

---

## 16. Testing Requirement

Before creating a PR:

```text
Run the relevant tests.
Run the application.
Check the affected feature manually.
```

For frontend changes:

```text
Check UI
Check API integration
Check loading states
Check error states
```

For backend changes:

```text
Check validation
Check error handling
Check authentication/authorization
Check database behavior
Check API response
```

---

## 17. Never Blindly Resolve Conflicts

If Git reports:

```text
CONFLICT
```

do not blindly choose:

```text
Accept Current
```

or:

```text
Accept Incoming
```

Understand both changes.

Preserve required functionality from both sides where appropriate.

After resolving:

```bash
git add .
git commit
```

Then run the application/tests again.

---

## 18. No Unnecessary Dependencies

Before installing a package, determine whether the existing project can already solve the problem.

Do not add libraries just because an AI agent suggests them.

Every dependency should have a clear purpose.

---

## 19. No Large Refactors During Feature Work

If the task is:

```text
Add patient registration
```

do NOT simultaneously:

```text
rewrite authentication
change database architecture
rename 50 files
replace state management
upgrade the entire framework
```

Create a separate branch for refactoring.

---

## 20. Golden Rule

The AI is an implementation assistant, NOT the project owner.

The developer decides:

* architecture
* data model
* API contracts
* security decisions
* dependencies
* major refactors
* what gets merged

AI-generated code must be reviewed before it becomes part of `main`.

---

# Default AI Prompt

When starting a task, developers may use:

> You are working inside the SIH 26047 Patient Case-Taking Software repository.
>
> First inspect the existing project structure and related implementation.
>
> Implement only the requested task.
>
> Do not modify unrelated files.
>
> Do not perform unnecessary refactoring.
>
> Do not change dependencies unless required.
>
> Do not modify `.env` files or introduce secrets.
>
> Before finishing, report:
>
> 1. Files changed
> 2. What changed in each file
> 3. Dependencies added
> 4. Potential breaking changes
> 5. Tests/checks performed
>
> Keep the implementation consistent with the existing architecture.
