import Button from "../Component/Butoon"
import Datepicker from "../Component/Datepicker"
import Inputtextcomponent from "../Component/Input_textcomponent"
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useState } from "react";


const SignupSchema = Yup.object().shape({
    fullname: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'), //
    email: Yup.string()
        .email('Invalid email')
        .required('Required'), //
    password: Yup.string()
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .required('Required'),
    confirmpassword: Yup.string()
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .required('Required'),
});





export default function Register() {
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
                                initialValues={{ fullname: '', email: '', password: '' }}
                                validationSchema={SignupSchema} // Pass the schema here
                                onSubmit={(values, { setSubmitting }) => {
                                    // Handle form submission
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }}
                            >
                                {({ errors, touched }) => (
                                    <Form>

                                        <div className="space-y-4">
                                            <div className="pb-2">
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
                                            <div className="pb-2">
                                                <p className="text-white">วันเดือนปีเกิด :</p>
                                                <Datepicker name="" />
                                            </div>
                                            <div className="pb-2">
                                                <p className="text-white">ที่อยู่อีเมลล์:</p>
                                                <Field
                                                    className="w-full px-4 py-2.5 text-sm
                                        border border-gray-300 rounded-md
                                        hover:border-indigo-400
                                        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                                        transition duration-200"
                                                    name="email" placeholder="กรุณาที่อยู่อีเมลล์" type="email" />

                                                <ErrorMessage name="email" component="div" />

                                            </div>
                                            <div className="pb-2">
                                                <p className="text-white">รหัสผ่าน:</p>
                                                <Field
                                                    className="w-full px-4 py-2.5 text-sm
                                        border border-gray-300 rounded-md
                                        hover:border-indigo-400
                                        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                                        transition duration-200"
                                                    name="password" placeholder="กรุณารหัสผ่าน" type="password" />

                                            </div>
                                            <div className="pb-2">
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
