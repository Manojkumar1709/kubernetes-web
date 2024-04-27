import React from 'react'
import { useRef } from 'react';
import ns from '../images/ns.png'
import pods from '../images/pods.png'
import pod from '../images/pod.png'
import node from '../images/node.png'

const Name = () => {
    const codeRef = useRef(null);
    return (
        <div>
            <div class="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <div className='text-center text-red-400 text-lg'>
                        <p>Namespace, Pods, Nodes</p>
                    </div>

                    <div className='mt-8'>
                        <p className='text-lg text-red-400'>Namespace(namespace/ns)</p>
                        <img src={ns} alt='Namespace' className='mt-3' />
                        <ul className='list-disc px-5 mt-5'>
                            <li>Namespaces provide a way to divide cluster resources between multiple users, teams, or applications.</li>
                            <li> They create a scope for Kubernetes objects, such as pods, services, and replication controllers, allowing different groups to use the same
                                cluster without interfering with each other.</li>
                            <li>Namespaces help in organizing and securing cluster resources by enabling role-based
                                access control (RBAC) at the namespace level.</li>
                            <li>Kubernetes namespaces allow administrators to set resource quotas to limit the amount of CPU, memory, and other
                                resources that can be consumed by objects within the namespace.</li>
                        </ul>
                        <div className="max-w-sm bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <div>
                                <p className='text-sm text-red-400 text-center'>Namespace(ns)</p>
                            </div>
                            <div>
                                <pre>
                                    <code ref={codeRef} className="language-yaml text-sm">
                                        <span className="text-green-700">apiVersion</span>: <span className="text-black">v1</span><br />
                                        <span className="text-green-700">kind</span>: <span className="text-black">Namespace</span><br />
                                        <span className="text-green-700">metadata</span>: <span className="text-black"></span><br />
                                        <span className="text-black">    name</span>: <span className="text-black">prod</span><br />
                                        <span className="text-black">    labels</span>: <span className="text-black"></span><br />
                                        <span className="text-black">        app</span>: <span className="text-black">myapp</span><br />
                                        <span className="text-black">        team</span>: <span className="text-black">production</span><br />
                                    </code>
                                </pre>
                            </div>
                        </div>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>kubectl create -f prod-namespace.yaml</p>
                        </div>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>kubectl get ns prod-namespace</p>
                        </div>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>kubectl get ns</p>
                        </div>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>kubectl delete ns prod-namespace</p>
                        </div>
                    </div>

                    <div className='border-b-2 mt-6 mb-6'>
                    </div>

                    <div className='mt-8'>
                        <p className='text-lg text-red-400'>Pods(pod)</p>
                        <img src={pods} alt='ReplicaSet' className='mt-3' />
                        <ul className='list-disc px-5 mt-5'>
                            <li>Pods are the smallest deployable units in Kubernetes and represent a single instance of a running process.</li>
                            <li>Containers within the same pod share the same network namespace and can communicate with each other using localhost.
                                They also share the same storage volumes, enabling easy data sharing between containers within the same pod.</li>
                            <li>Kubernetes manages the lifecycle of pods, ensuring that the desired number of pod replicas are running at all times.</li>
                        </ul>
                        <div className="max-w-sm bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <div>
                                <p className='text-sm text-red-400 text-center'>Pods(pod)</p>
                            </div>
                            <div>
                                <pre>
                                    <code ref={codeRef} className="language-yaml text-sm">
                                        <span className="text-green-700">apiVersion</span>: <span className="text-black">v1</span><br />
                                        <span className="text-green-700">kind</span>: <span className="text-black">Pod</span><br />
                                        <span className="text-green-700">metadata</span>: <span className="text-black"></span><br />
                                        <span className="text-black">  name</span>: <span className="text-black">pod1</span><br />
                                        <span className="text-black">  labels</span>: <span className="text-black"></span><br />
                                        <span className="text-black">    app</span>: <span className="text-black">my-pod</span><br />
                                        <span className="text-green-700">spec</span>: <span className="text-black"></span><br />
                                        <span className="text-black">  containers</span>: <span className="text-black"></span><br />
                                        <span className="text-black">  - image</span>: <span className="text-black">nginx</span><br />
                                        <span className="text-black">    name</span>: <span className="text-black">nginx-img</span><br />
                                    </code>
                                </pre>
                            </div>
                        </div>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>kubectl create -f nginx-pod.yaml</p>
                        </div>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>kubectl get pod nginx-pod</p>
                        </div>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>kubectl delete pod nginx-pod</p>
                        </div>
                        <p className='mt-3'>Types of Containers :</p>
                        <ul className='list-decimal px-5'>
                            <li>SideCar Container</li>
                            <li>Ambassadar Container</li>
                            <li>Adpater Container</li>
                        </ul>
                        <img src={pod} alt='ReplicaSet' className='mt-3' />
                        <ul className='list-disc px-5'>
                            <li>The Sidecar container enhances or extends the functionality of the main container without impacting
                                its core logic. It typically performs tasks such as logging, monitoring, or providing additional
                                functionality like security, proxying, or syncing data.</li>
                            <li> An Ambassador container acts as an intermediary between the application container and
                                external services or resources.</li>
                            <li> An Adapter container is responsible for converting or adapting data formats or protocols
                                between the application container and external systems.</li>
                        </ul>

                        <div className="max-w-sm bg-gray-200 m-4 text-black italic p-4 rounded-lg">
                            <div>
                                <p className='text-sm text-red-400 text-center'>SideCar Container</p>
                            </div>
                            <div>
                                <pre>
                                    <code ref={codeRef} className="language-yaml text-sm">
                                        <span className="text-green-700">apiVersion</span>: <span className="text-black">v1</span><br />
                                        <span className="text-green-700">kind</span>: <span className="text-black">Pod</span><br />
                                        <span className="text-green-700">metadata</span>: <span className="text-black"></span><br />
                                        <span className="text-black">  name</span>: <span className="text-black">sidecar-example</span><br />
                                        <span className="text-green-700">spec</span>: <span className="text-black"></span><br />
                                        <span className="text-black">  containers</span>: <span className="text-black"></span><br />
                                        <span className="text-black">  - name</span>: <span className="text-black">main-container</span><br />
                                        <span className="text-black">    image</span>: <span className="text-black">nginx:latest</span><br />
                                        <span className="text-black">    ports</span>: <span className="text-black"></span><br />
                                        <span className="text-black">      - containerPort</span>: <span className="text-black">80</span><br />
                                        <span className="text-black">  - name</span>: <span className="text-black">sidecar-container</span><br />
                                        <span className="text-black">    image</span>: <span className="text-black">busybox:latest</span><br />
                                        <span className="text-black">    command</span>: <br />
                                        <span className="text-black">      - 'sh'</span><br />
                                        <span className="text-black">      - '-c'</span><br />
                                        <span className="text-black">      - 'while true; do'</span><br />
                                        <span className="text-black">      - 'echo "Hello..,"'</span><br />
                                        <span className="text-black">      - 'sleep 10;'</span><br />
                                        <span className="text-black">      - 'done'</span><br />
                                    </code>
                                </pre>
                            </div>
                        </div>

                        <div className="max-w-sm bg-gray-200 m-4 text-black italic p-4 rounded-lg">
                            <div>
                                <p className='text-sm text-red-400 text-center'>Ambassadar Container</p>
                            </div>
                            <div>
                                <pre>
                                    <code ref={codeRef} className="language-yaml text-sm">
                                        <span className="text-green-700">apiVersion</span>: <span className="text-black">v1</span><br />
                                        <span className="text-green-700">kind</span>: <span className="text-black">Pod</span><br />
                                        <span className="text-green-700">metadata</span>: <span className="text-black"></span><br />
                                        <span className="text-black">  name</span>: <span className="text-black">nginx-service</span><br />
                                        <span className="text-green-700">spec</span>: <span className="text-black"></span><br />
                                        <span className="text-black">  containers</span>: <span className="text-black"></span><br />
                                        <span className="text-black">  - name</span>: <span className="text-black">nginx-service</span><br />
                                        <span className="text-black">    image</span>: <span className="text-black">nginx</span><br />
                                        <span className="text-black">  - name</span>: <span className="text-black">ambassador-container</span><br />
                                        <span className="text-black">    image</span>: <span className="text-black">haproxy:1.7</span><br />
                                        <span className="text-black">    ports</span>:<br />
                                        <span className="text-black">      - containerPort</span>: <span className="text-black">80</span><br />
                                        <span className="text-black">    volumeMounts</span>:<br />
                                        - name: config-volume<br />
                                        mountPath: /usr/local/etc/haproxy<br />
                                        <span className="text-green-700">volumes</span>:<br />
                                        - name: config-volume<br />
                                        configMap:<br />
                                        name: nginx-service-config<br />
                                    </code>

                                </pre>
                            </div>
                        </div>
                    </div>

                    <div className='border-b-2 mt-6 mb-6'>
                    </div>

                    <div className='mt-8'>
                        <p className='text-lg text-red-400'>Nodes</p>
                        <img src={node} alt='Deployment' className='mt-3' />
                        <ul className='list-disc px-5 mt-5'>
                            <li>Nodes are the worker machines in a Kubernetes cluster. They are responsible for running
                                containerized applications and providing the runtime environment necessary for them to execute.
                                Each node typically runs a container runtime such as Docker or containerd to manage containers. </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Name
