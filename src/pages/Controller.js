import React from 'react'
import { useRef } from 'react';
import rc from '../images/rc.jpg'
import rs from '../images/rs.png'
import deploy from '../images/deploy.png'

const Controller = () => {
    const codeRef = useRef(null);
    return (
        <div>
            <div class="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <div className='text-center text-red-400 text-lg'>
                        <p>Controllers(Replication Controller, Replication Set, Deployments)</p>
                    </div>

                    <div className='mt-8'>
                        <p className='text-lg text-red-400'>Replication Controller(rc)</p>
                        <img src={rc} alt='ReplicationController' className='mt-3' />
                        <ul className='list-disc px-5 mt-5'>
                            <li>A ReplicationController ensures a desired number of pod replicas are running.</li>
                            <li>It manages pod lifecycle, maintaining a specified number of copies.</li>
                            <li>By defining pod templates, it guarantees pod creation and monitoring, ideal for ensuring application availability and scalability.</li>
                        </ul>
                        <div className="max-w-sm bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <div>
                                <p className='text-sm text-red-400 text-center'>Replication Controller(rc)</p>
                            </div>
                            <div>
                                <pre>
                                    <code ref={codeRef} className="language-yaml text-sm">
                                        <span className="text-green-700">apiVersion</span>: <span className="text-black">v1</span><br />
                                        <span className="text-green-700">kind</span>: <span className="text-black">ReplicationController</span><br />
                                        <span className="text-green-700">metadata</span>: <span className="text-black"></span><br />
                                        <span className="text-black">  name</span>: <span className="text-black">nginx</span><br />
                                        <span className="text-green-700">spec</span>: <span className="text-black"></span><br />
                                        <span className="text-black">  replicas</span>: <span className="text-black">3</span><br />
                                        <span className="text-black">  selector</span>: <span className="text-black"></span><br />
                                        <span className="text-black">    app</span>: <span className="text-black">nginx</span><br />
                                        <span className="text-black">  template</span>: <span className="text-black"></span><br />
                                        <span className="text-black">    metadata</span>: <span className="text-black"></span><br />
                                        <span className="text-black">      name</span>: <span className="text-black">nginx</span><br />
                                        <span className="text-black">      labels</span>: <span className="text-black"></span><br />
                                        <span className="text-black">        app</span>: <span className="text-black">nginx</span><br />
                                        <span className="text-black">    spec</span>: <span className="text-black"></span><br />
                                        <span className="text-black">      containers</span>: <span className="text-black"></span><br />
                                        <span className="text-black">      - name</span>: <span className="text-black">nginx-img</span><br />
                                        <span className="text-black">        image</span>: <span className="text-black">nginx</span><br />
                                        <span className="text-black">        ports</span>: <span className="text-black"></span><br />
                                        <span className="text-black">        - containerPort</span>: <span className="text-black">80</span>
                                    </code>
                                </pre>
                            </div>
                        </div>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>kubectl create -f replication-controller.yaml</p>
                        </div>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>kubectl get rc replication-controller</p>
                        </div>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>kubectl get pods</p>
                        </div>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>kubectl delete rc replication-controller</p>
                        </div>
                        <p className='mt-3'>Disadvantage:</p>
                        <ul className='list-disc px-5'>
                            <li>It will create replicas regardless of whether the same replica is already present or not.
                                It does not consider whether the same replica is already present or not.</li>
                        </ul>
                    </div>

                    <div className='border-b-2 mt-6 mb-6'>
                    </div>

                    <div className='mt-8'>
                        <p className='text-lg text-red-400'>Replica Set(rs)</p>
                        <img src={rs} alt='ReplicaSet' className='mt-3' />
                        <ul className='list-disc px-5 mt-5'>
                            <li>ReplicaSets ensure high availability of applications by maintaining a specified number of identical pod replicas.</li>
                            <li>In case of pod failures or node failures, the ReplicaSet controller automatically creates new pods to replace the failed ones, ensuring that the desired number of replicas is always running.</li>
                            <li>This is crucial for critical applications that require continuous availability to serve user requests without interruptions.</li>
                        </ul>
                        <div className="max-w-sm bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <div>
                                <p className='text-sm text-red-400 text-center'>Replica Set(rs)</p>
                            </div>
                            <div>
                                <pre>
                                    <code ref={codeRef} className="language-yaml text-sm">
                                        <span className="text-green-700">apiVersion</span>: <span className="text-black">apps/v1</span><br />
                                        <span className="text-green-700">kind</span>: <span className="text-black">ReplicaSet</span><br />
                                        <span className="text-green-700">metadata</span>:<br />
                                        <span className="text-black">  name</span>: <span className="text-black">frontend</span><br />
                                        <span className="text-black">  labels:</span><br />
                                        <span className="text-black">    app</span>: <span className="text-black">my-app</span><br />
                                        <span className="text-black">    tier</span>: <span className="text-black">frontend</span><br />
                                        <span className="text-green-700">spec</span>:<br />
                                        <span className="text-black">  replicas</span>: <span className="text-black">3</span><br />
                                        <span className="text-black">  selector:</span><br />
                                        <span className="text-black">    matchLabels:</span><br />
                                        <span className="text-black">      tier</span>: <span className="text-black">frontend</span><br />
                                        <span className="text-black">  template:</span><br />
                                        <span className="text-black">    metadata:</span><br />
                                        <span className="text-black">      labels:</span><br />
                                        <span className="text-black">        tier</span>: <span className="text-black">frontend</span><br />
                                        <span className="text-black">    spec:</span><br />
                                        <span className="text-black">      containers:</span><br />
                                        <span className="text-black">      - name</span>: <span className="text-black">nginx-img</span><br />
                                        <span className="text-black">        image</span>: <span className="text-black">nginx</span><br />
                                        <span className="text-black">        ports:</span><br />
                                        <span className="text-black">        - containerPort</span>: <span className="text-black">80</span>
                                    </code>
                                </pre>
                            </div>
                        </div>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>kubectl create -f replica-set.yaml</p>
                        </div>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>kubectl get rs replica-set</p>
                        </div>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>kubectl get pods</p>
                        </div>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>kubectl delete rs replica-set</p>
                        </div>
                        <p className='mt-3'>Disadvantage:</p>
                        <ul className='list-disc px-5'>
                            <li>ReplicaSets lack the ability to perform updates or scaling based on custom-defined
                                criteria beyond simple count-based scaling.</li>
                        </ul>
                    </div>

                    <div className='border-b-2 mt-6 mb-6'>
                    </div>

                    <div className='mt-8'>
                        <p className='text-lg text-red-400'>Deployment(deploy/deployment)</p>
                        <img src={deploy} alt='Deployment' className='mt-3' />
                        <ul className='list-disc px-5 mt-5'>
                            <li>Deployments enable declarative updates to Kubernetes applications. Operators define the desired state of their
                                application using a Deployment manifest, specifying parameters such as the container image, number of replicas,
                                and update strategy. </li>
                            <li>Deployments support rolling updates and rollbacks, allowing operators to seamlessly update or revert changes to their applications without causing downtime.</li>
                            <li>Deployments facilitate horizontal scaling of applications by allowing operators to scale the number of replicas up or down based on demand.</li>
                        </ul>
                        <div className="max-w-sm bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <div>
                                <p className='text-sm text-red-400 text-center'>Deployment(deploy/deployment)</p>
                            </div>
                            <div>
                                <pre>
                                    <code ref={codeRef} className="language-yaml text-sm">
                                        <span className="text-green-700">apiVersion</span>: <span className="text-black">apps/v1</span><br />
                                        <span className="text-green-700">kind</span>: <span className="text-black">Deployment</span><br />
                                        <span className="text-green-700">metadata</span>:<br />
                                        <span className="text-black">  name</span>: <span className="text-black">nginx-deploy</span><br />
                                        <span className="text-black">  labels</span>:<br />
                                        <span className="text-black">    app</span>: <span className="text-black">nginx</span><br />
                                        <span className="text-green-700">spec</span>:<br />
                                        <span className="text-black">  replicas</span>: <span className="text-black">3</span><br />
                                        <span className="text-black">  selector</span>:<br />
                                        <span className="text-black">    matchLabels</span>:<br />
                                        <span className="text-black">      app</span>: <span className="text-black">nginx</span><br />
                                        <span className="text-black">  template</span>:<br />
                                        <span className="text-black">    metadata</span>:<br />
                                        <span className="text-black">      labels</span>:<br />
                                        <span className="text-black">        app</span>: <span className="text-black">nginx</span><br />
                                        <span className="text-black">    spec</span>:<br />
                                        <span className="text-black">      containers</span>:<br />
                                        <span className="text-black">      - name</span>: <span className="text-black">nginx-img</span><br />
                                        <span className="text-black">        image</span>: <span className="text-black">nginx</span><br />
                                        <span className="text-black">        ports</span>:<br />
                                        <span className="text-black">        - containerPort</span>: <span className="text-black">80</span>
                                    </code>
                                </pre>
                            </div>
                        </div>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>kubectl create -f nginx-deployment.yaml</p>
                        </div>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>kubectl get deploy nginx-deployment</p>
                        </div>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>kubectl get pods</p>
                        </div>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>kubectl delete deploy nginx-deployment</p>
                        </div>
                        <p className='mt-3'>Types of Deployments :</p>
                        <ul className='list-decimal px-5'>
                            <li>Rollouts and Rolling Updates</li>
                            <li>Blue-Green Deployment</li>
                            <li>Canary Deployment</li>
                            <li>Horizontal Pod Autoscaler</li>
                        </ul>
                        <div className='mt-5 px-3'>
                            <p className='text-md text-red-400'>Rollouts and Rolling Updates</p>
                            <div className="max-w-sm bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                                <div>
                                    <p className='text-sm text-red-400 text-center'>Rollouts and Rolling Updates</p>
                                </div>
                                <div>
                                    <pre>
                                        <code ref={codeRef} className="language-yaml text-sm">
                                            <span className="text-green-700">apiVersion</span>: <span className="text-black">apps/v1</span><br />
                                            <span className="text-green-700">kind</span>: <span className="text-black">Deployment</span><br />
                                            <span className="text-green-700">metadata</span>:<br />
                                            <span className="text-black">  name</span>: <span className="text-black">rolling-updates</span><br />
                                            <span className="text-green-700">spec</span>:<br />
                                            <span className="text-black">  replicas</span>: <span className="text-black">5</span><br />
                                            <span className="text-black">  minReadySeconds</span>: <span className="text-black">30</span> <br />
                                            <span className="text-green-700">  strategy</span>:<br />
                                            <span className="text-black">    type</span>: <span className="text-black">RollingUpdate</span><br />
                                            <span className="text-green-700">    rollingUpdate</span>:<br />
                                            <span className="text-black">      maxUnavailable</span>: <span className="text-black">1</span><br />
                                            <span className="text-black">      maxSurge</span>: <span className="text-black">2</span><br />
                                            <span className="text-green-700">  selector</span>:<br />
                                            <span className="text-black">    matchLabels</span>:<br />
                                            <span className="text-black">      app</span>: <span className="text-black">rolling-updates</span><br />
                                            <span className="text-green-700">  template</span>:<br />
                                            <span className="text-black">    metadata</span>:<br />
                                            <span className="text-black">      name</span>: <span className="text-black">rolling-updates</span><br />
                                            <span className="text-black">      labels</span>:<br />
                                            <span className="text-black">        app</span>: <span className="text-black">rolling-updates</span><br />
                                            <span className="text-green-700">    spec</span>:<br />
                                            <span className="text-black">      containers</span>:<br />
                                            <span className="text-black">      - image</span>: <span className="text-black">manoj1709/node-application:v1</span><br />
                                            <span className="text-black">        name</span>: <span className="text-black">app</span><br />
                                            <span className="text-black">        resources</span>:<br />
                                            <span className="text-black">          requests</span>:<br />
                                            <span className="text-black">            memory</span>: <span className="text-black">"64Mi"</span><br />
                                            <span className="text-black">            cpu</span>: <span className="text-black">"250m"</span><br />
                                            <span className="text-black">          limits</span>:<br />
                                            <span className="text-black">            memory</span>: <span className="text-black">"128Mi"</span><br />
                                            <span className="text-black">            cpu</span>: <span className="text-black">"500m"</span><br />
                                        </code>
                                    </pre>
                                </div>
                            </div>
                            <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                                <p>kubectl create -f rolling-update.yaml</p>
                            </div>
                            <div className="max-w-2xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                                <p>kubectl set image deploy kubeserve app=manoj1709/node-application:latest --record=true</p>
                            </div>
                            <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p className='text-gray-500'>#On worker node</p>
                                <p>while true; do curl 10.10.1.111; sleep 2; echo " "; done;</p>
                            </div>
                            <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                                <p>kubectl rollout history deploy kubeserve</p>
                            </div>
                            <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                                <p>kubectl rollout undo deploy kubeserve --to-revision=1</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Controller
//
//
//
//
//
//
//
//   template:
//     metadata:
//       name: nginx
//       labels:
//         app: nginx
//     spec:
//       containers:
//       - name: nginx-img
//         image: nginx
//         ports:
//         - containerPort: 80

// #Creating a ReplicaSet
//
//
// metadata:
//   name: frontend
//   labels:
//     app: my-app
//     tier: frontend
// spec:
//   replicas: 3
//   selector:
//     matchLabels:
//       tier: frontend
//   template:
//     metadata:
//       labels:
//         tier: frontend
//     spec:
//       containers:
//       - name: nginx-img
//         image: nginx

// 
