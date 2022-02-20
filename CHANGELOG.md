# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2022-02-19

### Added

- Create client feature
- Client authentication
- Find all deliveries from client

- Create deliveryman feature
- Deliveryman authentication
- Find all deliveries from deliveryman

- Create delivery feature
- Find all available deliveries without ended_at and id_deliveryman
- Finish delivery (add ended_at)

- express-async-error lib to deal with exceptions

### Changed

- Move secrets to .env

### Removed

### Fixed

- Removed passwords from find all client and deliveryman deliveries
- Create deliveryman and client where condition

## [0.0.2] - 2022-02-19

### Added

- Server init file and package.json script config
- Migrations to deliveryman, clients and deliveries
- tsconfig.json paths
- Clean arch initial setup

### Changed

### Removed

### Fixed

## [0.0.1] - 2022-02-17

### Added

- Initial application setup with Typescript, Prisma.io, Bcrypt and JsonWebToken

### Changed

### Removed

### Fixed
