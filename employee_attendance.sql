CREATE DATABASE employee_attendance;
	
CREATE TABLE employee(
	employee_id INT PRIMARY KEY,
	employee_name VARCHAR(255) NOT NULL,
	position_name VARCHAR(255),
	department_name VARCHAR(255));
	
CREATE TABLE employee_attendance(
	employee_id INT,
	at_date DATE,
	at_time TIME(0) WITHOUT TIME ZONE,
	punch_type VARCHAR(5),
	CONSTRAINT fk_employee_id FOREIGN KEY (employee_id)
	REFERENCES employee(employee_id));

CREATE TABLE employee_work_hour(
	employee_id INT,
	at_date DATE,
	work_hour VARCHAR(255),
	CONSTRAINT fk_employee_id FOREIGN KEY (employee_id)
	REFERENCES employee(employee_id));
	
SELECT * FROM employee_attendance

SELECT * FROM employee_work_hour

SELECT * FROM employee_attendance WHERE employee_id = 1 AND at_date = '2022-08-29' AND punch_type = 'OUT'