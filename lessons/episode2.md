## EPISODE 2

Before we deploy app to production we need to do code splitting, code chunking, bundling, image optimize, remove comments, minify code etc with use of a bundler `parcel`

### npm (not node packager manager)

    - It is a standard repo for all projects. All packages are hosted here
    - It manages packages for a project
    - `package.json` is a configuration for npm, keeps track of package versions
    - Most imp package in a project is  `bundler`
    - Bundler packages our app so that it ships to production
    - CreateReactApp is a scaffold that has webpack as bundler, in built testing library also

### parcel

    - 2 types of dependency 1. dev 2. production
    - parcel : ^ 2.8.3 (^ denotes auto update minor version, ~ auto update major version)
    - package-lock.json has the exact version of packages we installed.
    - integrity inside package-lock is a hash to avoid code working on local and not in production. It uses this hash to verify the exact package is available on production compared to local
    - create dev build
    - creates local server
    - HMR (hot module replacement) auto refresh page by saving. how? By file watching algo written in c++ by reading all files to make changes on browser by building again
    - caching (build faster)
    - image optimizes
    - minify files for prod
    - bundling
    = compress
    - consistent hashing
    - code splitting
    - differential bundling (to support older browser)
    - diagnostics
    - error handling
    - https
    - tree shaking (remove unused code)
    - different build for dev and prod

### node modules

    - Contains all the packages of parcel inside this folder
    - Kind of db that contains the actual dependencies
    - Parcel has its own dependencies in turn that dep can have their own dep (transitive dependencies)
    - every dep has its own package.json
    - using package-lock and package.json we can create required node modules
    - npx executes a package, npm installs
    - cdn is not preferred as it a costly operation of network calls
    - `browserlist` to configure supported browser versions
