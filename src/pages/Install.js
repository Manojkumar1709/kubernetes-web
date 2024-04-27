import React from 'react'
import { Link } from 'react-router-dom'

const Install = () => {
    return (
        <div>
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <p className='text-2xl text-center'>Installation of Kubernetes</p>
                    <div className="mb-6">
                        <div>
                            <h3 className='text-xl text-gray-800 font-bold mt-6'>Introduction</h3>
                            <p>
                                Welcome to the <Link
                                    to='https://kubernetes.io/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-red-400 italic'
                                >Kubernetes</Link> installation guide! Whether you're a beginner looking to set up a
                                local cluster for testing or an enterprise user gearing up for a production deployment,
                                this guide will walk you through the installation process.
                            </p>
                        </div>

                        <div>
                            <h3 className='text-xl text-gray-800 font-bold mt-6'>Prerequisites</h3>
                            <p>
                                Before you start the installation, ensure you have the following:
                            </p>
                            <div className='mt-4 px-5'>
                                <ul>
                                    <li className='list-disc'>
                                        A machine or virtual environment with the required specifications.
                                    </li>
                                    <li className='list-disc'>
                                        Administrative or root access to install software and configure settings.
                                    </li>
                                    <li className='list-disc'>
                                        Internet connectivity for downloading necessary packages.
                                    </li>
                                    <li className='list-disc'>
                                        Familiarity with basic command-line operations.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h3 className='text-xl text-gray-800 font-bold mt-6'>Choose Your Installation Method</h3>
                            <p>Kubernetes offers multiple installation methods depending on your requirements:</p>
                            <div className='mt-4 px-5'>
                                <ol>
                                    <li className='list-decimal'>
                                        <strong>Minikube: </strong> Ideal for local development and testing.
                                    </li>
                                    <li className='list-decimal'>
                                        <strong>Kubeadm: </strong> A tool for setting up a cluster on various cloud providers or bare-metal.
                                    </li>
                                    <li className='list-decimal'>
                                        <strong>Kops: </strong> Suitable for setting up production-grade Kubernetes clusters on AWS.
                                    </li>
                                    <li className='list-decimal'>
                                        <strong>Managed Kubernetes Services:</strong> Options like <Link
                                            to={'https://cloud.google.com/kubernetes-engine?hl=en'}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='text-red-400 italic'
                                        >
                                            Google Kubernetes Engine (GKE)</Link>, <Link
                                                to={'https://aws.amazon.com/eks/'}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='text-red-400 italic'
                                            >Amazon EKS</Link>, or
                                        <Link
                                            to={'https://azure.microsoft.com/en-in/products/kubernetes-service'}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='text-red-400 italic'
                                        >Azure Kubernetes Service (AKS)</Link>.
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <div>
                            <h3 className='text-xl text-gray-800 font-bold mt-6'>Installation Steps</h3>
                            <div>
                                <h5 className='text-md text-gray-800 font-medium mt-5'>Minikube Installation:</h5>
                                <div className='mt-2 px-5'>
                                    <ol>
                                        <li className='list-decimal'>
                                            <strong>Install Virtualization Software:</strong> If you're on macOS, install <Link
                                                to={'https://www.virtualbox.org/wiki/Mac%20OS%20X%20build%20instructions'}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='text-red-400 italic'
                                            >
                                                VirtualBox</Link> or <Link
                                                    to={'https://www.vmware.com/in/products/fusion.html'}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    className='text-red-400 italic'
                                                >VMware Fusion</Link>
                                            . For Windows, use <Link
                                                to={'https://www.virtualbox.org/wiki/Downloads'}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='text-red-400 italic'
                                            >VirtualBox</Link>.
                                        </li>
                                        <li className='list-decimal'>
                                            <strong>Install Minikube: </strong>
                                            Follow the official
                                            <Link
                                                to='https://minikube.sigs.k8s.io/docs/start/'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='text-red-400 italic'
                                            >  Minikube
                                            </Link> installation guide.

                                        </li>
                                        <li className='list-decimal'>
                                            <strong>Start Minikube: </strong>
                                            Use the command
                                            <strong className='text-md font-medium text-red-400 cursor-pointer'> `minikube start` </strong>
                                            to initialize the cluster.
                                        </li>
                                        <li className='list-decimal'>
                                            <strong>Verify Installation: </strong> Run
                                            <strong className='text-md font-medium text-red-400 cursor-pointer'> `kubectl cluster-info` </strong>
                                            to ensure Kubernetes is running correctly.
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <h5 className='text-md text-gray-800 font-medium mt-5'>Kubeadm Installation:</h5>
                                <div className='mt-2 px-5'>
                                    <ol>
                                        <li className='list-decimal'>
                                            <strong>Install Docker: </strong>
                                            Ensure<strong> </strong>
                                            <Link to='https://docs.docker.com/engine/install/'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='text-red-400 italic'
                                            >
                                                Docker
                                            </Link> is installed and configured correctly.
                                        </li>
                                        <li className='list-decimal'>
                                            <strong>Install kubeadm, kubelet, and kubectl: </strong>
                                            Use package managers or download binaries as per your OS.
                                            <Link
                                                to='https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='text-red-400 italic'
                                            >  (Kubeadm installation)
                                            </Link>

                                        </li>
                                        <li className='list-decimal'>
                                            <strong>Initialize Master Node: </strong>
                                            Execute
                                            <strong className='text-md font-medium text-red-400 cursor-pointer'> `kubeadm init` </strong>
                                            on your master node.
                                        </li>
                                        <li className='list-decimal'>
                                            <strong>Set Up Cluster Networking: </strong> Apply a networking solution like Calico, Flannel, or Weave.
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className='text-xl text-gray-800 font-bold mt-6'>Post-Installation Tasks</h3>
                            <div className='mt-4 px-5'>
                                <ul>
                                    <li className='list-disc'>
                                        <strong>Set Up <strong className='text-md font-medium text-red-400 cursor-pointer'>`kubectl`</strong> :</strong> Configure kubectl to communicate with your cluster.
                                    </li>
                                    <li className='list-disc'>
                                        <strong>Install Helm: </strong> <Link
                                            to={'https://helm.sh/docs/intro/install/'}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='text-red-400 italic'
                                        >Helm</Link> is a package manager for Kubernetes. Install and initialize Helm for managing applications.
                                    </li>
                                </ul>
                            </div>

                            <div className='mt-6'>
                                <p>
                                    Congratulations! You've successfully installed Kubernetes.
                                    Remember to keep your cluster components updated and follow best practices
                                    for maintaining a healthy and secure Kubernetes environment.
                                </p>
                            </div>
                        </div>

                        <div className='border-b-2 mt-6'>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <p className='text-2xl text-center'>Installation of Kubernetes</p>
                    <div className="mb-6">
                        <div className='border-b-2 mt-6'>
                        </div>
                        
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Install


