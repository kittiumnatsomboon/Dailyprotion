import Button from "../Component/Butoon"
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SignupSchema = Yup.object().shape({
    fullname: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('กรุณาระบุชื่อ-นามสกุล'), //
    email: Yup.string()
        .email('รูปแบบอีเมลล์ไม่ถูกต้อง')
        .required('กรุณาระบุอีเมลล์'), //
    password: Yup.string()
        .min(8, 'รหัสผ่านขั้นต่ำ 8 ตัวอักษร.')
        .required('กรุณาระบุรหัสผ่าน'),
    Dateofbirth: Yup.date()
        .typeError('รูปแบบวันเดือนปีผิด'),
    confirmpassword: Yup.string()
        .min(8, 'รหัสผ่านขั้นต่ำ 8 ตัวอักษร')
        .required('กรุณาระบุรหัสผ่าน'),
});

export default function Register() {
    const [startDate, setStartDate] = useState(new Date());
    const handleDateChange = (date) => {
        setStartDate(date);
        console.log(startDate)
    };
    return (
        <>
            <div className="flex flex-col md:flex-row min-h-screen">
                <div className="w-full md:w-1/2">
                    <img src="images/Register.jpg" />
                </div>
                <div className="w-full md:w-1/2 bg-gradient-to-r from-violet-500 to-violet-900 p-4">
                    <div className="text-center text-white">
                        <p className="text-2xl">สมัครสมาชิก</p>
                        <p className="text-base">
                            กรุณาเข้าสู่ระบบเพื่อใช้งานฟีเจอร์ต่าง ๆ ของระบบ
                            ข้อมูลของคุณจะถูกเก็บรักษาอย่างปลอดภัย
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div></div>
                        <div className="p-8">
                            <Formik
                                initialValues={{ fullname: '', Dateofbirth: '', email: '', password: '', confirmpassword: '' }}
                                validationSchema={SignupSchema} // Pass the schema here
                                onSubmit={async (values, { setSubmitting }) => {
                                    // Handle form submission
                                    const res = await fetch('http://localhost:5000/api/register/',{
                                        method:'GET',
                                        headers: {
                                        'Content-Type': 'application/json', // บอกเซิร์ฟเวอร์ว่าส่งข้อมูล JSON
                                        },
                                        body: JSON.stringify(values)
                                    })
                                    console.log(res.data);
                                }}
                            >
                                {({ errors, touched, values, setFieldValue }) => (
                                    <Form>

                                        <div className="space-y-4">
                                            <div className="">
                                                <p className="text-white">ชื่อ-นามสกุล:</p>
                                                <Field
                                                    className="w-full px-4 py-2.5 text-sm
                                                    border border-gray-300 rounded-md
                                                    hover:border-indigo-400
                                                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                                                    transition duration-200"
                                                    name="fullname" placeholder="กรุณาระบุชื่อ-นามสกุล" type="text" />
                                                {errors.fullname && touched.fullname ? (
                                                    <div className="text-red-500">{errors.fullname}</div>
                                                ) : null}
                                            </div>
                                            <div className="">
                                                <p className="text-white">วันเดือนปีเกิด :</p>
                                                <DatePicker
                                                    className="w-full px-4 py-2.5 text-sm
                                                                border border-gray-300 rounded-md
                                                                hover:border-indigo-400
                                                                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                                                                transition duration-200"
                                                    placeholderText="กรุณาระบุวันเดือนปีเกิด"
                                                    yearDropdownItemNumber={100}
                                                    scrollableYearDropdown
                                                    showYearDropdown
                                                    showMonthDropdown
                                                    selected={values.Dateofbirth || null}
                                                    onChange={
                                                        (date) =>
                                                            setFieldValue(
                                                                'Dateofbirth',
                                                                date
                                                            )
                                                    }
                                                    dateFormat="yyyy-MM-dd"
                                                    name="Dateofbirth"
                                                />
                                                {errors.Dateofbirth && touched.Dateofbirth ? (
                                                    <div className="text-red-500">{errors.Dateofbirth}</div>
                                                ) : null}
                                            </div>
                                            <div className="">
                                                <p className="text-white">ที่อยู่อีเมลล์:</p>
                                                <Field
                                                    className="w-full px-4 py-2.5 text-sm
                                                    border border-gray-300 rounded-md
                                                    hover:border-indigo-400
                                                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                                                    transition duration-200"
                                                    name="email" placeholder="กรุณาที่อยู่อีเมลล์" type="email" />

                                                {errors.email && touched.email ? (
                                                    <div className="text-red-500">{errors.email}</div>
                                                ) : null}

                                            </div>
                                            <div className="">
                                                <p className="text-white">รหัสผ่าน:</p>
                                                <Field
                                                    className="w-full px-4 py-2.5 text-sm
                                                    border border-gray-300 rounded-md
                                                    hover:border-indigo-400
                                                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                                                    transition duration-200"
                                                    name="password" placeholder="กรุณารหัสผ่าน" type="password" />

                                            </div>
                                            {errors.password && touched.password ? (
                                                <div className="text-red-500">{errors.password}</div>
                                            ) : null}
                                            <div className="">
                                                <p className="text-white">ยืนยันรหัสผ่าน:</p>
                                                <Field
                                                    className="
                                                    w-full px-4 py-2.5 text-sm
                                                    border border-gray-300 rounded-md
                                                    hover:border-indigo-400
                                                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                                                    transition duration-200"
                                                    name="confirmpassword" placeholder="กรุณายืนยันรหัสผ่าน" type="password" />

                                            </div>
                                            {errors.confirmpassword && touched.confirmpassword ? (
                                                <div className="text-red-500">{errors.confirmpassword}</div>
                                            ) : null}
                                            <div className="pb-2 text-center">
                                                <Button name="btnregister" type="submit">
                                                    สมัครสมาชิก
                                                </Button>
                                            </div>

                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}
