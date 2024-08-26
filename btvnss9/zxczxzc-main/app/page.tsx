// b1
// import React from "react";
// import Button from "../app/Button";

import { B612 } from "next/font/google";

// const Home: React.FC = () => {
//   const handleClick = () => {
//     alert("Button clicked!");
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <Button variant="primary" size="large" onClick={handleClick}>
//         Primary Button
//       </Button>
//       <Button variant="secondary" size="small" onClick={handleClick}>
//         Secondary Button
//       </Button>
//       <Button variant="destructive" size="large" onClick={handleClick}>
//         Destructive Button
//       </Button>
//     </div>
//   );
// };

// export default Home;

// b2
// import React, { useState } from 'react';
// import Input from '../app/Input';

// const Home: React.FC = () => {
//   const [textValue, setTextValue] = useState<string>('');
//   const [numberValue, setNumberValue] = useState<number>(10);
//   const [fileValue, setFileValue] = useState<File | null>(null);

//   const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setTextValue(e.target.value);
//   };

//   const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setNumberValue(parseInt(e.target.value));
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setFileValue(e.target.files[0]);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <Input type="text" value={textValue} onChange={handleTextChange} />
//       <Input type="number" value={numberValue} onChange={handleNumberChange} />
//       <Input type="file" onChange={handleFileChange} />
//     </div>
//   );
// };

// export default Home;

// b3
// import React from 'react';
// import Breadcrumb from '../app/Breadcrumb';

// const Home: React.FC = () => {
//   const breadcrumbItems = [
//     { label: 'Home', href: '/' },
//     { label: 'Components', href: '/components' },
//   ];

//   const breadcrumbItems2 = [
//     { label: 'Home', href: '/' },
//     { label: 'List product', href: '/products' },
//   ];

//   const breadcrumbItems3 = [
//     { label: 'Home', href: '/' },
//     { label: 'Order', href: '/order' },
//     { label: 'Order detail' },
//   ];

//   return (
//     <div className="flex flex-col items-start justify-center min-h-screen space-y-4">
//       <Breadcrumb items={breadcrumbItems} />
//       <Breadcrumb items={breadcrumbItems2} />
//       <Breadcrumb items={breadcrumbItems3} />
//     </div>
//   );
// };

// export default Home;

// b4
// import Head from 'next/head';
// import SubjectSelect from '../app/Select';

// export default function Home() {
//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center py-2">
//       <Head>
//         <title>Select Subject</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
//         <h1 className="text-6xl font-bold">
//           Chọn môn học
//         </h1>
//         <SubjectSelect />
//       </main>
//     </div>
//   );
// }

// b5
// import Head from 'next/head';
// import OTPInput from '../app/OTPInput';
// import { useState } from 'react';

// export default function Home() {
//   const [otpValue, setOtpValue] = useState<string>("");

//   const handleOtpChange = (otp: string) => {
//     setOtpValue(otp);
//   };

//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center py-2">
//       <Head>
//         <title>OTP Input</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
//         <h1 className="text-6xl font-bold mb-8">
//           Mã xác nhận
//         </h1>

//         {/* OTP Input for 8 digits */}
//         <OTPInput length={8} onChangeOTP={handleOtpChange} />
//         <p className="mt-4 italic text-gray-600">Mã xác nhận với 8 số</p>

//         {/* OTP Input for 6 digits */}
//         <div className="mt-8">
//           <OTPInput length={6} onChangeOTP={handleOtpChange} />
//           <p className="mt-4 italic text-gray-600">Mã xác nhận với 6 số</p>
//         </div>

//         <div className="mt-8">
//           <p>OTP Value: {otpValue}</p>
//         </div>
//       </main>
//     </div>
//   );
// }

// B6
// import Head from 'next/head';
// import SliderComponent from '../components/SliderComponent';

// export default function Home() {
//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center py-2">
//       <Head>
//         <title>Slider Example</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
//         <h1 className="text-4xl font-bold mb-8">
//           Slider Example
//         </h1>

//         {/* Slider Component */}
//         <SliderComponent />

//         <div className="mt-8">
//           <SliderComponent />
//         </div>
//       </main>
//     </div>
//   );
// }
