# Installation Instructions

## 1. Install Java JDK 17

1. Visit the official Oracle website: https://www.oracle.com/java/technologies/downloads/#java17
2. Download the Windows x64 Installer
3. Run the installer and follow the on-screen instructions
4. During installation:
   - Select "Custom" installation
   - Make sure to check "Add to PATH"
   - Complete the installation

## 2. Install Maven

1. Visit the official Maven website: https://maven.apache.org/download.cgi
2. Download the latest binary zip archive
3. Extract the zip file to a directory (e.g., C:\Program Files\Apache\maven)
4. Add Maven to your system PATH:
   - Open System Properties (Right-click on This PC -> Properties)
   - Click on "Advanced system settings"
   - Click on "Environment Variables"
   - Under System Variables, find and select "Path"
   - Click "Edit"
   - Click "New"
   - Add the path to Maven's bin directory (e.g., C:\Program Files\Apache\maven\bin)
   - Click OK on all windows

## 3. Install Node.js

1. Visit the official Node.js website: https://nodejs.org/
2. Download the LTS (Long Term Support) version for Windows
3. Run the installer and follow the on-screen instructions
4. During installation:
   - Accept all default options
   - The installer will automatically add Node.js and npm to your PATH

## 4. Verify Installation

After installing all prerequisites, run the setup script to verify everything is working:

```bash
cd c:\Users\vidhi\CascadeProjects\note-app
setup_prerequisites.bat
```

The script will check if all required tools are properly installed and added to your PATH.

## 5. Run the Application

Once all prerequisites are installed and verified, you can run the application:

1. Start the backend:
```bash
cd c:\Users\vidhi\CascadeProjects\note-app\note-app-backend
mvn clean install
mvn spring-boot:run
```

2. In a new terminal, start the frontend:
```bash
cd c:\Users\vidhi\CascadeProjects\note-app\note-app-frontend
npm install
ng serve
```

The application will be available at:
- Backend: http://localhost:8080
- Frontend: http://localhost:4200
