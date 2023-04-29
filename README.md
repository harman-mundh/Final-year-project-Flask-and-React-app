# Recipe Recommendation Application
This application provides recommendations on food recipes based on user input. The application consists of a machine learning model, which is generated using a Jupyter notebook file, and a front-end user interface built with Node.js and React.

## Prerequisites
Before running the application, you must have the following installed on your system:

* Python 3.x
* Node.js
## Installation
1. Clone the repository to your local machine using the following command:

``` bash
git clone https://github.com/<repository>.git
```
2. Create a Python virtual environment using the following command:

```bash
python3 -m venv venv
```
3.  Activate the virtual environment using the following command:


```bash
source venv/bin/activate
```
4. Install the required Python packages using the following command:

```bash
pip install -r requirements.txt
```
5. Navigate to the backend folder and run the Jupyter notebook file using the following command:

```bash
jupyter notebook
```
In the Jupyter notebook interface, open the .ipynb file in root folder and run all the cells to generate the machine learning model.

6. Once the model is generated, navigate to the root folder and start the back-end flask api by running run_app.sh with the following command:

```bash
./run_app.sh
```
7. Open a second terminal and navigate to the front-end folder.

8. Install the required Node.js packages using the following command:

```bash
npm install
```
9. Start the application using the following command:

```bash
npm start
```
The application should now be running at http://localhost:3000.

## Usage
1. Open the application in your web browser at http://localhost:3000.

2. Start typing your food preferences and select from the drop down list.

3. The application will provide a list of next 5 most similar recommended food recipes based on input prompt.

4. You can click on the cross button next the seach bar to reset the shown results.