import React from 'react'
import cluster from '../images/cluster.png'
import node from '../images/node.png'

const Home = () => {
    return (
        <div>
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <p className='text-2xl text-center'>Kubernetes Documentation</p>
                    <div className="mb-6">
                        <div>
                            <h3 className='text-xl text-gray-800 font-bold mt-4'>Kubernetes</h3>
                            <p>Kubernetes is the operating system of the cloud native world, providing a reliable
                                and scalable platform for running containerized workloads.
                            </p>
                        </div>
                        <div>
                            <div>
                                <h4 className='text-xl text-gray-800 font-bold mt-6 text-center'>Cluster Architecture</h4>
                                <img className='mt-6' src={cluster} alt={''} />
                            </div>
                            <div>
                                <div className='content-center'>
                                    <p>The control plane is actually made up of several components:</p>
                                </div>
                                <div>
                                    <div>
                                        <p className='text-red-500'>kube-apiserver</p>
                                        <p className='px-6'>This is the frontend server for the control plane, handling API requests.</p>
                                    </div>
                                    <div>
                                        <p className='text-red-500'>etcd</p>
                                        <p className='px-6'>This is the database where Kubernetes stores all its information: what nodes exist,
                                            what resources exist on the cluster, and so on.</p>
                                    </div>
                                    <div>
                                        <p className='text-red-500'>kube-scheduler</p>
                                        <p className='px-6'>This decides where to run newly created Pods.</p>
                                    </div>
                                    <div>
                                        <p className='text-red-500'>kube-controller-manager</p>
                                        <p className='px-6'>This is responsible for running resource controllers, such as Deployments.</p>
                                    </div>
                                    <div>
                                        <p className='text-red-500'>cloud-controller-manager</p>
                                        <p className='px-6'>This interacts with the cloud provider (in cloud-based clusters), managing
                                            resources such as load balancers and disk volumes.</p>
                                    </div>
                                    <div>
                                        <p className='mt-5'>The control-plane components in a production cluster typically run on multiple
                                            servers to ensure high availability.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div>
                                <h4 className='text-xl text-gray-800 font-bold mt-6 text-center'>Node Architecture</h4>
                                <img className='mt-6 px-20' src={node} alt={''} />
                            </div>
                            <div>
                                <div className='content-center mt-5'>
                                    <p>Cluster members that run user workloads are called worker nodes.</p>
                                </div>
                                <div>
                                    <div className='mt-5'>
                                        <p>Each worker node in a Kubernetes cluster runs these components:</p>
                                        <p className='text-red-500'>kubelet</p>
                                        <p className='px-6'>This is responsible for driving the container runtime to start workloads that are
                                            scheduled on the node, and monitoring their status.</p>
                                    </div>
                                    <div>
                                        <p className='text-red-500'>kube-proxy</p>
                                        <p className='px-6'>This does the networking magic that routes requests between Pods on different
                                            nodes, and between Pods and the internet.</p>
                                    </div>
                                    <div>
                                        <p className='text-red-500'>Container runtime</p>
                                        <p className='px-6'>This actually starts and stops containers and handles their communications.
                                            Historically the most popular option has been Docker, but Kubernetes supports
                                            other container runtimes as well, such as containerd and CRI-O.</p>
                                    </div>
                                    <div>
                                        <p className='mt-5'>Other than running different containerized components, there’s no intrinsic difference
                                            between a node running control plane components and worker nodes that run
                                            application workloads. Typically, nodes running the control plane components do not
                                            also run user-created workloads, except in very small clusters (like Docker Desktop
                                            or Minikube).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h4 className='text-xl text-gray-800 font-bold mt-6 text-center'>High Availability</h4>
                            </div>
                            <div>
                                <div className='content-center mt-5'>
                                    <p>A correctly configured Kubernetes cluster has multiple control plane nodes, making
                                        it highly available; that is, if any individual node fails or is shut down, or one of the
                                        control plane components on it stops running, the cluster will still work properly. A
                                        highly available control plane will also handle the situation where the control plane
                                        nodes are working properly, but some of them cannot communicate with the others,
                                        due to a network failure (known as a network partition).
                                        The etcd database is replicated across multiple nodes, and can survive the failure
                                        of individual nodes, so long as a quorum of over half the original number of etcd
                                        replicas is still available.
                                        If all of this is configured correctly, the control plane can survive a reboot or tempo‐
                                        rary failure of individual nodes.</p>
                                </div>
                                <div>
                                    <h4 className='text-xl text-gray-800 font-bold mt-6'>Control plane failure</h4>
                                    <p>A damaged control plane doesn’t necessarily mean that your applications will go
                                        down, although it might well cause strange and erratic behavior.
                                        For example, if you were to stop all the control plane nodes in your cluster, the Pods
                                        on the worker nodes would keep on running—at least for a while. But you would
                                        be unable to deploy any new containers or change any Kubernetes resources, and
                                        controllers such as Deployments would stop working.
                                        Therefore, high availability of the control plane is critical to a properly functioning
                                        cluster. You need to have enough control plane nodes available that the cluster can
                                        maintain a quorum even if one fails; for production clusters, the workable minimum
                                        is three.</p>
                                </div>
                                <div>
                                    <h4 className='text-xl text-gray-800 font-bold mt-6'>Worker node failure</h4>
                                    <p>By contrast, the failure of any single worker node shouldn’t really matter as long as
                                        applications are configured to run with more than one replica. Kubernetes will detect
                                        the failure and reschedule the node’s Pods somewhere else, so long as the control
                                        plane is still working.</p>
                                    <p className='mt-2'>If a large number of nodes fail at once, this might mean that the cluster no longer has
                                        enough resources to run all the workloads you need. Fortunately, this doesn’t happen
                                        often, and even if it does, Kubernetes will keep as many of your Pods running as it
                                        can while you replace the missing nodes.</p>
                                    <p className='mt-2'>It’s worth bearing in mind, though, that the fewer worker nodes you have, the greater
                                        the proportion of the cluster’s capacity that each one represents. You should assume
                                        that a single-node failure could happen at any time, especially in the cloud, and two
                                        simultaneous failures are not unheard of.</p>
                                    <p className='mt-2'>A rare, but entirely possible, kind of failure is losing a whole cloud availability zone.
                                        Cloud vendors like AWS and Google Cloud provide multiple availability zones in
                                        each region, each corresponding roughly to a single datacenter. For this reason, rather
                                        than having all your worker nodes in the same zone, it’s a good idea to distribute
                                        them across two or even three zones.</p>
                                </div>
                            </div>
                        </div>
                        <div className='border-b-2 mt-6'>
                        </div>
                        <div className='box-content h-30 w-200 p-4 border-2 border-blue-400 rounded-lg shadow-lg hover:shadow-xl mt-6'>
                            <p className='italic'>
                                Cloud native is the practice of accelerating your business by not running stuff that
                                doesn’t differentiate you. It’s not a cloud provider, it’s not Kubernetes, it’s not contain‐
                                ers, it’s not a technology.</p>
                            <p className='px-5 text-blue-400 italic'>—Justin Garrison
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
