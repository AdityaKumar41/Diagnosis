import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { DataTag } from "@tanstack/react-query";
import { Link } from "@nextui-org/react";
import {
  CheckCircle,
  FileText,
  Lock,
  Shield,
  Stethoscope,
  User,
} from "lucide-react";
import { useContext, useEffect } from "react";
import { Context } from "../context/Provider";
import { Tabs, Tab } from "@nextui-org/react";
import { ethers } from "ethers";
import { useForm, SubmitHandler } from "react-hook-form";
import contractABI from "../../doctor.json";
import { VerifyCheckup } from "../hooks/Client";

export default function HomePage() {
  const WalletAddress = import.meta.env.VITE_DOCTOR_CONTRACT;
  const { account } = useContext(Context);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { data, error } = VerifyCheckup(account, { enabled: !!account });
  type Inputs = {
    name: string;
    email: string;
    redgistration: string;
  };

  const { register, handleSubmit } = useForm<Inputs>();

  useEffect(() => {
    if (account !== "" && account !== null) {
      if (!data && error?.response?.errors?.[0]?.message === "User not found") {
        onOpen();
      }
    }
  }, [account, data, error, onOpen]);

  const submit = async (data: Inputs) => {
    const { name, email, redgistration } = data;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(WalletAddress, contractABI, signer);
    const rex = await contract.registerDoctor(name, redgistration);
    console.log(rex);

    
  };
  return (
    <main className="flex-1 self-center">
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {() => (
            <>
              <div className="flex w-full flex-col">
                <ModalHeader>
                  <h2 className="text-xl font-bold">
                    Register to HealthConnect
                  </h2>
                </ModalHeader>
                <Tabs aria-label="Options">
                  <Tab key="Doctor" title="Doctor">
                    <Card>
                      <CardBody>
                        <form
                          onSubmit={handleSubmit(submit)}
                          className="flex flex-col gap-4"
                        >
                          <Input
                            type="name"
                            label="Name"
                            placeholder="Enter your Name"
                            required
                            className="dark"
                            {...register("name")}
                          />
                          <Input
                            type="email"
                            label="Email"
                            placeholder="Enter your email"
                            required
                            className="dark"
                            {...register("email")}
                          />
                          <Input
                            type="redgistration"
                            label="Redgistartion Number"
                            placeholder="Enter your Redgistration Number"
                            required
                            className="dark"
                            {...register("redgistration")}
                          />
                          <Button type="submit">Submit</Button>
                        </form>
                      </CardBody>
                    </Card>
                  </Tab>
                  <Tab key="Patients" title="Patients">
                    <Card>
                      <CardBody>
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </CardBody>
                    </Card>
                  </Tab>
                </Tabs>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
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
