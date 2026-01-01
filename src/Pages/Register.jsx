import Inputtextcomponent from "../Component/Input_textcomponent"

export default function Register() {
    return (
        <>
            <div className="flex flex-col md:flex-row min-h-screen text-white">
                <div className="w-full md:w-1/2">
                    <img src="images/Register.jpg" />
                </div>
                <div className="w-full md:w-1/2 bg-gradient-to-r from-violet-500 to-violet-900 p-4">
                    <div className="text-center">
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
                                    ชื่อ-นามสกุล:<br></br>
                                    <Inputtextcomponent label="" placeholder="กรุณาระบุชื่อ-นามสกุล" type="text" />
                                </div>
                                <div>
                                    วันเดือนปีเกิด :
                                    <Inputtextcomponent label="" placeholder="กรุณาระบุชื่อ-นามสกุล" type="text" />
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
