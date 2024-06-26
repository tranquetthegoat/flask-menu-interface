# Menu Template with Python Webview

This template provides a simple menu interface using Python webview. It utilizes HTML, CSS (Bootstrap), and JavaScript to create a responsive sidebar menu with tabbed content.

## Features

- **Responsive Sidebar:** Toggleable sidebar for navigation.
- **Tabbed Content:** Content organized into tabs with nested sub-tabs.
- **Bootstrap Styling:** Uses Bootstrap's Darkly theme for a sleek appearance.
- **Flask Integration:** Includes Flask for serving dynamic content.

## Usage

1. **Setup:**
   - Ensure Python is installed on your system.
   - Install the required packages using pip:
     ```bash
     pip install webview flask keyboard
     ```

2. **Run:**
   - Execute the Python script `main.py` to launch the application:
     ```bash
     python main.py
     ```
   - This will open a window displaying the menu and content.

3. **Navigation:**
   - Click on sidebar links to switch between tabs and sub-tabs.
   - Content for each tab will dynamically update in the main view.

4. **Toggle Window Visibility:**
   - Press `home` key to toggle visibility of the application window.
   - This functionality is enabled using the `keyboard` library to handle hotkey events.

## Dependencies

- Bootstrap 4.5.2
- jQuery 3.5.1
- Popper.js 2.5.4
- webview Python package
- Flask for dynamic web content
- keyboard for handling hotkeys

## Files

- `main.py`: Python script to initialize the webview and Flask server.
- `index.html`: HTML file defining the structure and content.
- `static/`: Directory containing CSS (`styles.css`) and JavaScript (`main.js`) files.
- `app.py`: Flask application for serving dynamic content.

## Customize

- **Modify HTML:** Update `index.html` to change the structure or content.
- **Adjust CSS:** Modify `styles.css` to customize the appearance.
- **Enhance Functionality:** Edit `main.js` to add or modify JavaScript functionality.
- **Extend Flask App:** Expand `app.py` to serve additional dynamic content or integrate with backend services.

## Screenshots
![Preloader](https://github.com/tranquetthegoat/flask-menu-interface/assets/167721080/0c2a44e2-e2fd-4e62-a826-11e194f4b6f5)
![Sidebar](https://github.com/tranquetthegoat/flask-menu-interface/assets/167721080/7b746048-5140-45d8-8907-d4c16fe8ea08)
![image](https://github.com/tranquetthegoat/flask-menu-interface/assets/167721080/d3236159-4ce1-47a1-8fad-261b71cbd44b)
![image](https://github.com/tranquetthegoat/flask-menu-interface/assets/167721080/e29d6f55-5b67-4f27-a95d-47c656cd7f96)


## Credits

- Template based on Bootstrap, Python webview, Flask, and keyboard libraries.
- Created by tranquett.
