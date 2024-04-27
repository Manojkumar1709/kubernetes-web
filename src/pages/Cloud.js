import React from 'react'
import gke from '../images/gke.png'
import eks from '../images/eks.png'
import aks from '../images/aks.png'

const Cloud = () => {
    return (
        <div>
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <p className='text-xl text-center font-bold'>Managed Kubernetes Services</p>
                    <div className="mb-6">
                        <div>
                            <p className='mt-2'>Managed Kubernetes services relieve you of almost all the administration overhead of
                                setting up and running Kubernetes clusters, particularly the control plane. Effectively,
                                a managed service means you pay for someone else (such as Microsoft, Amazon, or
                                Google) to run the cluster for you.
                            </p>
                        </div>
                        <div>
                            <div>
                                <h4 className='text-xl text-gray-800 font-bold mt-6 text-center'>Google Kubernetes Engine (GKE)</h4>
                            </div>
                            <div>
                                <p className='mt-2'>
                                    As you’d expect from the originators of Kubernetes, Google offers a fully managed
                                    Kubernetes service that is completely integrated with the Google Cloud Platform
                                    (GCP). You can deploy clusters using the GCP web console gcloud CLI, or their
                                    Terraform module. Within a few minutes, your cluster will be ready to use.</p>
                                <p>Google takes care of monitoring and replacing failed nodes, and auto-applying security patches.
                                    You can set your clusters to automatically upgrade to the latest version of
                                    Kubernetes that’s available, during a maintenance window of your choice.
                                    For extended high availability, you can create multizone clusters, which spread worker
                                    nodes across multiple failure zones (roughly equivalent to individual datacenters).
                                    Your workloads will keep on running, even if a whole failure zone is affected by an
                                    outage.
                                </p>
                                <div className='mt-4'>
                                    <img src={gke} alt='GKE' />
                                </div>
                                <div>
                                    <h4 className='text-xl text-gray-800 font-bold mt-6'>Cluster Autoscaling</h4>
                                    <p className='mt-2'>
                                        GKE also offers a cluster autoscaling option. With
                                        autoscaling enabled, if there are pending workloads that are waiting for a node to
                                        become available, the system will add new nodes automatically to accommodate the
                                        demand.
                                        Conversely, if there is spare capacity, the autoscaler will consolidate Pods onto a
                                        smaller number of nodes and remove the unused nodes. Since billing for GKE is
                                        based on the number of worker nodes, this helps you control costs.
                                    </p>
                                </div>
                                <div>
                                    <h4 className='text-xl text-gray-800 font-bold mt-6'>Autopilot</h4>
                                    <p className='mt-2'>
                                        Google also offers a tier for GKE called Autopilot that takes the managed service one
                                        step further. While most hosted offerings take care of managing the control plane
                                        node, Autopilot also fully manages the worker nodes. You are billed for the CPU and
                                        memory that your Pods request, and the actual worker node VMs are abstracted away from you. For teams that want the flexibility of Kubernetes, but do not care much
                                        about the underlying servers where the containers end up running, this would be an
                                        option worth considering.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h4 className='text-xl text-gray-800 font-bold mt-6 text-center'>Amazon Elastic Kubernetes Service (EKS)</h4>
                            </div>
                            <div>
                                <div className='mt-4'>
                                    <img src={eks} alt='EKS' />
                                </div>
                                <div>
                                    <p>
                                        Amazon has also been providing managed container cluster services for a long
                                        time, but until very recently the only option was Elastic Container Service (ECS),
                                        Amazon’s proprietary technology for running containers on EC2 virtual machines.
                                        While perfectly usable, ECS is not as powerful or flexible as Kubernetes, and evidently
                                        even Amazon has decided that the future is Kubernetes, with the launch of Elastic
                                        Kubernetes Service (EKS).</p>
                                    <p>Amazon has the most popular public cloud offering today, and most cloud deploy‐
                                        ments of Kubernetes are running in AWS. If you already have your infrastructure
                                        in AWS and are looking to migrate your applications to Kubernetes, then EKS is a
                                        sensible choice. Amazon takes care of managing the control plane nodes, and you
                                        deploy your containers to EC2 instance worker nodes.</p>
                                    <p>If you wish to set up centralized logging with CloudWatch or cluster auto-scaling,
                                        you’ll need to configure those once the cluster is up and running. This makes for
                                        less of a “batteries-included” experience than some of the other hosted offerings on
                                        the market, but depending on your environment and use-case, you may wish to
                                        customize or leave out these features anyway.</p>
                                    <p>There are a few options for deploying EKS clusters including using the AWS Manage‐
                                        ment Console, the aws CLI tool, an open source CLI tool called eksctl, and there
                                        is a popular EKS Terraform module. Each of these tools can automate creating the
                                        various IAM, VPC, and EC2 resources needed for a functioning Kubernetes cluster.
                                        eksctl can additionally handle setting up additional components, like CloudWatch
                                        logging, or installing various add-ons as part of provisioning the cluster, making it a
                                        more full-featured out-of-box Kubernetes experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h4 className='text-xl text-gray-800 font-bold mt-6 text-center'>Azure Kubernetes Service (AKS)</h4>
                            </div>
                            <div>
                                <div className='mt-4'>
                                    <img src={aks} alt='EKS' />
                                </div>
                                <div>
                                    <p className='mt-2'>
                                        Azure Kubernetes Service (AKS) is the Microsoft option for hosted Kubernetes
                                        clusters on Azure. AKS has traditionally rolled out support for newer versions of
                                        Kubernetes before their GKE or EKS competitors. You can create clusters from the
                                        Azure web interface or using the Azure az command-line tool, or their Terraform
                                        AKS module.
                                        As with GKE and EKS, you have the option to hand off managing the control plane
                                        nodes, and your billing is based on the number of worker nodes in your cluster. AKS
                                        also supports cluster autoscaling to adjust the number of worker nodes based on
                                        usage.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h4 className='text-xl text-gray-800 font-bold mt-6 text-center'>IBM Cloud Kubernetes Service</h4>
                            </div>
                            <div>
                                <div>
                                    <p className='mt-2'>
                                        Naturally, the venerable IBM is not to be left out in the field of managed Kubernetes
                                        services. IBM Cloud Kubernetes Service is pretty simple and straightforward, allow‐
                                        ing you to set up a vanilla Kubernetes cluster in IBM Cloud.
                                        You can access and manage your IBM Cloud cluster through the default Kubernetes
                                        CLI and the provided command-line tool, or a basic GUI. There are no real killer
                                        features that differentiate IBM’s offering from the other major cloud providers, but it’s
                                        a logical option if you’re already using IBM Cloud.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h4 className='text-xl text-gray-800 font-bold mt-6 text-center'>DigitalOcean Kubernetes</h4>
                            </div>
                            <div>
                                <div>
                                    <p className='mt-2'>
                                        DigitalOcean is known for providing a simple cloud offering with excellent docu‐
                                        mentation and tutorials for developers. Recently they started offering a managed
                                        Kubernetes offering called, not surprisingly, DigitalOcean Kubernetes. Like AKS, they
                                        do not charge for running the managed control plane nodes, and you are billed for
                                        the worker nodes where your applications run.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='border-b-2 mt-6'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cloud
