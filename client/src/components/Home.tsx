import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Link } from "@nextui-org/react";
import {
  CheckCircle,
  FileText,
  Lock,
  Shield,
  Stethoscope,
  User,
} from "lucide-react";
import { useContext } from "react";
import { Context } from "../context/Provider";

export default function HomePage() {
  const { data } = useContext(Context);
  console.log(data);
  return (
    <main className="flex-1 self-center">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-60">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to HealthConnect
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Empowering patients and doctors with secure, specialized access
                to medical diagnoses.
              </p>
            </div>
            <div className="space-x-4">
              <Button>For Patients</Button>
              <Button>For Doctors</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 dark:text-white">
            Key Features
          </h2>
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <Card>
              <CardHeader>
                <User className="w-8 h-8 mb-2" />
                <CardHeader>Patient Control</CardHeader>
              </CardHeader>
              <CardBody>
                Upload your diagnoses and control who sees your data. Share
                specific reports with chosen doctors.
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <FileText className="w-8 h-8 mb-2" />
                <CardHeader>Specialized Access</CardHeader>
              </CardHeader>
              <CardBody>
                Doctors see only the reports relevant to their specialization,
                ensuring focused and efficient care.
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="w-8 h-8 mb-2" />
                <CardHeader>Doctor Verification</CardHeader>
              </CardHeader>
              <CardBody>
                We verify all doctors using their medical certificates and
                registration numbers for authenticity.
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                For Patients
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Upload and manage your medical diagnoses
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Control which doctors can access your reports
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Securely share specific data as needed
                </li>
              </ul>
              <Button>Sign Up as a Patient</Button>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                For Doctors
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Access patient reports relevant to your specialization
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Efficient diagnosis with focused information
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Verify your credentials for platform access
                </li>
              </ul>
              <Button>Apply as a Doctor</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Secure and Private
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Your health data is protected with state-of-the-art security
                measures.
              </p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Lock className="w-12 h-12" />
              <Shield className="w-12 h-12" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
