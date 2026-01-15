import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Imagebackground from "./Imagebackground";
import Button from "./Butoon";
import Inlineeditor from "./Inlineeditor";
export default function Dashboard() {
    // Display profile
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigator = useNavigate();

    const save = (value) => { alert(value) }
    const cancel = () => { alert("Cancelled") }
    useEffect(() => {
        const fetchProfile = async () => {
            // Retrieve the token from storage
            const token = localStorage.getItem('token');

            if (!token) {
                setError('No authorization token found. Please log in.');
                setLoading(false);
                navigator("/login")
                return;
            }

            try {
                const response = await fetch('http://localhost:5000/api/account/', {
                    method: 'GET', // GET is default, but explicit for clarity
                    headers: {
                        'Content-Type': 'application/json',
                        // Add the Authorization header with the Bearer token
                        'Authorization': `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                    // Handle unauthorized or other errors (e.g., token expired)
                    throw new Error('Failed to fetch profile. Unauthorized or server error.');
                }

                const data = await response.json();
                setProfile(data);

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();

    }, [])

    if (loading) {
        return <div>Loading profile...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    // GET Dateofbrith
    const dateofbirth = () => {
        const getdateofbirth = new Date(profile.Dateofbirth);
        const day = getdateofbirth.getDate();
        const year = getdateofbirth.getFullYear();
        const month = getdateofbirth.getMonth() + 1;
        const resount = [day, year, month];
        return resount.join("/");
    }

    // คำนวนอายุ
    const calculatedateofbirth = () => {
        const today = new Date();
        // วันเกิด (แปลงจาก "YYYY-MM-DD" หรือ "MM/DD/YYYY" โดยขึ้นอยู่กับรูปแบบที่รับมา)
        // ตัวอย่างนี้รับรูปแบบ "YYYY-MM-DD"
        const birthDate = new Date(profile.Dateofbirth);
        // คำนวณความแตกต่างเป็นมิลลิวินาที
        const diffMs = today.getTime() - birthDate.getTime();
        // แปลงมิลลิวินาทีเป็นวัน
        const dayMs = 1000 * 60 * 60 * 24;
        const days = Math.floor(diffMs / dayMs);
        // วิธีที่แม่นยำกว่า คือการใช้ปีเป็นหลักแล้วลดหลั่น
        let y = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        let d = today.getDate() - birthDate.getDate();

        // ปรับค่าถ้าเดือนหรือวันปัจจุบันน้อยกว่าวันเกิด
        if (m < 0 || (m === 0 && d < 0)) {
            y--;
            m += 12;
        }
        if (d < 0) {
            // ต้องรู้ว่าเดือนก่อนหน้ามีกี่วัน
            const daysInPrevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            d += daysInPrevMonth;
            m--;
        }
        return `${y} ปี ${m} เดือน ${d} วัน`;
    }



    return (
        <>
            <Imagebackground textinformation="Infromation" />
            <div className="flex flex-col md:flex-row min-h-screen">
                <div className="w-full md:w-1/2">
                    <img src="images/Register.jpg" className="h-full w-full object-cover" />
                </div>
                <div className="w-full md:w-1/2 bg-gradient-to-r from-violet-500 to-violet-900 p-4">
                    <div className="text-center text-white">
                        <div className="text-xl pt-8">

                            <div className="flex items-center justify-center w-full mt-8">
                                <label
                                    htmlFor="file-upload"
                                    className="relative flex flex-col items-center justify-center
                                    w-full max-w-md h-48
                                    border-2 border-dashed border-gray-400
                                    rounded-xl cursor-pointer
                                    bg-gray-900 hover:bg-gray-800 transition"
                                >

                                    {/* ✅ ถ้ามีรูป */}
                                    {profile.userimage ? (
                                        <img
                                            src={profile.userimage}
                                            alt="profile"
                                            className="absolute inset-0 w-full h-full object-cover rounded-xl opacity-90"
                                        />
                                    ) : (
                                        <>
                                            {/* ไอคอน */}
                                            <svg
                                                className="w-10 h-10 mb-3 text-gray-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M7 16V12M12 16V8M17 16v-4M3 20h18"
                                                />
                                            </svg>

                                            <p className="mb-1 text-sm text-gray-300">
                                                <span className="font-semibold">คลิกเพื่ออัปโหลด</span> หรือ ลากไฟล์มาวาง
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                PNG, JPG (ไม่เกิน 10MB)
                                            </p>
                                        </>
                                    )}

                                    {/* input */}
                                    <input
                                        id="file-upload"
                                        type="file"
                                        className="hidden"
                                        accept="image/*"
                                    />
                                </label>
                            </div>
                                <div className="pt-4 pb-4"><Button name="update" type="submit" children="อัพโหลดรูปภาพ" /></div>
                        </div>

                        <p className="text-2xl">Information</p>
                        <div className="text-xl pt-4">
                            ชื่อ:<Inlineeditor initialValue={profile.firstname} />
                        </div>
                        <div className="text-xl pt-4">
                            นามสกุล:<Inlineeditor initialValue={profile.lastname} />
                        </div>
                        <div className="text-xl pt-4">
                            วันเดือนปีเกิด:<Inlineeditor initialValue={dateofbirth()} />
                        </div>
                        <div className="text-xl pt-4">
                            อีเมลล์:<Inlineeditor initialValue={profile.email} />
                        </div>


                        <p className="text-xl pt-4">อายุปัจจุบัน:{calculatedateofbirth()}</p>
                        <Button name="update" type="submit" children="อัพเดทข้อมูล" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 text-center">

                <div className="space-y-4">


                </div>
            </div>
        </>
    )
}