import React from 'react'
import { NavLink } from 'react-router-dom'
import { KubernetesPlain, GooglecloudOriginal } from 'devicons-react'
import { FcDownload, FcHome } from "react-icons/fc";
import { AiFillCode } from "react-icons/ai";

const Sidebar = () => {
    return (
        <>
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2 text-sm">
                <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "flex items-center p-2 text-blue-500 rounded-lg dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-600 group" :
                                    "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"}
                        > 
                           <FcHome/>
                            <span className="ms-3">Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/cloud-kubernetes"
                            className={({ isActive }) =>
                                isActive ? "flex items-center p-2 text-blue-500 rounded-lg dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-600 group" :
                                    "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"}
                        > 
                           <GooglecloudOriginal/>
                            <span className="ms-3">Cloud Kubernetes</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/install-kubernetes"
                            className={({ isActive }) =>
                                isActive ? "flex items-center p-2 text-blue-500 rounded-lg dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-600 group" :
                                    "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"}
                        > 
                           <FcDownload/>
                            <span className="ms-3">Install Kubernetes</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/install-kubeadm"
                            className={({ isActive }) =>
                                isActive ? "flex items-center p-2 text-blue-500 rounded-lg dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-600 group" :
                                    "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"}
                        > 
                           <FcDownload/>
                            <span className="ms-3">Install Kubeadm</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/kubernetes-commands"
                            className={({ isActive }) =>
                                isActive ? "flex items-center p-2 text-blue-500 rounded-lg dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-600 group" :
                                    "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"}
                        > 
                           <AiFillCode/>
                            <span className="ms-3">Commands</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/kubernetes-controllers"
                            className={({ isActive }) =>
                                isActive ? "flex items-center p-2 text-blue-500 rounded-lg dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-600 group" :
                                    "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"}
                        > 
                           <KubernetesPlain/>
                            <span className="ms-3">Controllers(RC, RS, Deployments)</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/kubernetes-namespace"
                            className={({ isActive }) =>
                                isActive ? "flex items-center p-2 text-blue-500 rounded-lg dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-600 group" :
                                    "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"}
                        > 
                           <KubernetesPlain/>
                            <span className="ms-3">Namespace, Pods, Nodes</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar
