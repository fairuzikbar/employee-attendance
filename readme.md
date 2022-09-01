### Mini Employee Attendance
Employee attendance ini merupakan program presensi karyawan. Terdapat 3 tabel, yaitu:
1. employee : berisi data karyawan seperti employee_id, employee_name, position_name, dan department_name
2. employee_attendance : berisi data presensi karyawan seperti employee_id, at_date, at_time, dan punch_type
3. employee_work_hour : berisi data jam kerja karyawan seperti employee_id, at_date, dan work_hour

Penggunaan Endpoint
1. Untuk employee, menggunakan endpoint /employee. Endpoint ini dapat melakukan create, list, update, dan delete. Create dimasukkan dengan mengirimkan employee_id, employee_name, position_name, dan department_name.
2. Untuk list all attendance, menggunakan endpoint /attendance. Endpoint ini dapat melakukan list daftar attendance secara keseluruhan.
3. Untuk tap in attendance, menggunakan endpoint /attendance/in. Endpoint ini dapat melakukan create in dengan memasukkan employee_id.
4. Untuk tap out attendance, menggunakan endpoint /attendance/out. Endpoint ini dapat melakukan create out dengan memasukkan employee_id.
5. Untuk melihat jumlah jam kerja, menggunakan endpoint /workhour. Endpoint ini dapat melihat jumlah jam kerja dengan memasukkan employee_id dan at_date