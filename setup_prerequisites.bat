@echo off

:: Check if Java is installed
echo Checking for Java...
java -version >nul 2>&1
if errorlevel 1 (
    echo Java is not installed. Please download and install Java JDK 17 from:
    echo https://www.oracle.com/java/technologies/downloads/#java17
    echo.
    pause
    exit /b 1
)

echo Java is installed.

:: Check if Maven is installed
echo Checking for Maven...
mvn -version >nul 2>&1
if errorlevel 1 (
    echo Maven is not installed. Please download and install Maven from:
    echo https://maven.apache.org/download.cgi
    echo.
    echo After downloading, extract the zip file and add Maven's bin directory to your PATH.
    echo.
    pause
    exit /b 1
)

echo Maven is installed.

:: Check if Node.js is installed
echo Checking for Node.js...
node --version >nul 2>&1
if errorlevel 1 (
    echo Node.js is not installed. Please download and install Node.js from:
    echo https://nodejs.org/
    echo.
    echo Download the LTS version for stability.
    echo.
    pause
    exit /b 1
)

echo Node.js is installed.

:: Check if npm is installed
echo Checking for npm...
npm --version >nul 2>&1
if errorlevel 1 (
    echo npm is not installed. Please reinstall Node.js to get npm.
    echo.
    pause
    exit /b 1
)

echo All prerequisites are installed!
echo.
echo You can now proceed to run the application.
echo.
pause
