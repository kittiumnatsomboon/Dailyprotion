import Button from "../Component/Butoon"
import Datepicker from "../Component/Datepicker"
import Inputtextcomponent from "../Component/Input_textcomponent"
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
                            <div className="space-y-4">
                                <div className="pb-2">
                                    <p className="text-white">ชื่อ-นามสกุล:</p>
                                    <Inputtextcomponent name="fullname" placeholder="กรุณาระบุชื่อ-นามสกุล" type="text" />
                                </div>
                                <div className="pb-2">
                                    <p className="text-white">วันเดือนปีเกิด :</p>
                                    <Datepicker name="" />
                                </div>
                                <div className="pb-2">
                                    <p className="text-white">ที่อยู่อีเมลล์:</p>
                                    <Inputtextcomponent name="email" placeholder="กรุณาที่อยู่อีเมลล์" type="email" />

                                </div>
                                <div className="pb-2">
                                    <p className="text-white">รหัสผ่าน:</p>
                                    <Inputtextcomponent name="password" placeholder="กรุณารหัสผ่าน" type="password" />

                                </div>
                                <div className="pb-2">
                                    <p className="text-white">ยืนยันรหัสผ่าน:</p>
                                    <Inputtextcomponent name="confirmpassword" placeholder="กรุณายืนยันรหัสผ่าน" type="password" />

                                </div>
                                <div className="pb-2 text-center">
                                    <Button name="btnregister">
                                        สมัครสมาชิก
                                    </Button>
                                </div>

                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}
