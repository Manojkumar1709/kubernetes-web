import React from 'react'

const Kubeadm = () => {
    return (
        <div>
            <div class="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <div className='text-center text-red-400 text-lg'>
                        <p>Installation of the Kubeadm</p>
                    </div>

                    <div className='mt-8'>

                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>sudo apt update</p>
                            <p>sudo apt upgrade -y</p>
                        </div>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>sudo reboot</p>
                        </div>
                        <p className='px-2 text-xl'>Set the Hostname</p>
                        <p className='px-4 mt-2'>On master node</p>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>sudo hostnamectl set-hostname "k8s-master.ubuntu"</p>
                        </div>
                        <p className='px-4'>On worker node1</p>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>sudo hostnamectl set-hostname "k8s-node1.ubuntu"</p>
                        </div>
                        <p className='px-4'>On worker node2</p>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>sudo hostnamectl set-hostname "k8s-node2.ubuntu"</p>
                        </div>
                        <p className='px-4'>Next we update the file <strong className='text-md font-medium text-red-400 cursor-pointer'>/etc/hosts</strong> file of all node.</p>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>sudo apt install -y nano </p>
                            <p>sudo nano /etc/hosts </p>
                        </div>
                        <p className='px-4'>Then add the ip address of each ubuntu machine</p>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>192.168.31.131   k8s-master.ubuntu k8s-master </p>
                            <p>192.168.31.132   k8s-node1.ubuntu k8s-node1 </p>
                            <p>192.168.31.133   k8s-node2.ubuntu k8s-node2 </p>
                        </div>
                        <p className='px-2 text-lg'>Disable swap and kernel update</p>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>sudo swapoff -a </p>
                        </div>
                        <p className='px-4'>Check whether the swap has disabled or not</p>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>free -h </p>
                        </div>
                        <p className='px-4'>Next disable swap in <strong className='text-md font-medium text-red-400 cursor-pointer'>/etc/fstab</strong></p>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>sudo nano /etc/fstab </p>
                        </div>
                        <p className='px-4'>Find the line: <strong className='text-md font-medium text-red-400 cursor-pointer'>/swap.img none swap sw 0 0</strong> and update to:</p>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>#/swap.img       none       swap       sw       0       0 </p>
                        </div>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>sudo mount -a</p>
                            <p>free -h</p>
                        </div>
                        <p className='px-4'>Load the following kernel modules on all the nodes:</p>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>{`sudo tee /etc/modules-load.d/containerd.conf <<EOF`}</p>
                            <p>overlay</p>
                            <p>br_netfilter</p>
                            <p>EOF</p>
                        </div>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>sudo modprobe overlay</p>
                            <p>sudo modprobe br_netfilter</p>
                        </div>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>{`sudo tee /etc/sysctl.d/kubernetes.conf <<EOF`}</p>
                            <p>net.bridge.bridge-nf-call-ip6tables = 1</p>
                            <p>net.bridge.bridge-nf-call-iptables = 1</p>
                            <p>net.ipv4.ip_forward = 1</p>
                            <p>EOF</p>
                        </div>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>sudo sysctl --system</p>
                        </div>
                        <p className='px-2 text-lg'>Install containerd run time</p>
                        <div className="max-w-4xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>sudo apt install -y curl gnupg2 software-properties-common apt-transport-https ca-certificates</p>
                            <p>sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmour -o /etc/apt/trusted.gpg.d/docker.gpg</p>
                            <p>sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"</p>
                            <p>sudo apt update</p>
                            <p>sudo apt install -y containerd.io</p>
                        </div>
                        <div className="max-w-2xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>{`containerd config default | sudo tee /etc/containerd/config.toml >/dev/null 2>&1`}</p>
                            <p>{`sudo sed -i 's/SystemdCgroup \= false/SystemdCgroup \= true/g' /etc/containerd/config.toml`}</p>
                            <p>sudo systemctl restart containerd</p>
                            <p>sudo systemctl enable containerd</p>
                        </div>
                        <p className='px-2 text-lg'>Install Kubernetes</p>
                        <div className="max-w-2xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>{`curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -`}</p>
                            <p>{`sudo apt-add-repository "deb http://apt.kubernetes.io/ kubernetes-xenial main"`}</p>
                            <p>sudo apt update</p>
                            <p>sudo apt install -y kubelet kubeadm kubectl</p>
                            <p>sudo apt-mark hold kubelet kubeadm kubectl</p>
                        </div>
                        <p className='px-4'> Or install the kubernetes stable version</p>
                        <div className="max-w-6xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>{`curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.28/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg`}</p>
                            <p>{`echo 'deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.28/deb/ /' | sudo tee /etc/apt/sources.list.d/kubernetes.list`}</p>
                            <p>sudo apt update</p>
                            <p>sudo apt install -y kubeadm=1.28.1-1.1 kubelet=1.28.1-1.1 kubectl=1.28.1-1.1</p>
                            <p>sudo apt-mark hold kubelet kubeadm kubectl</p>
                        </div>
                        <p className='px-2 text-lg'>Initialize the cluster with kubeadm in master ubuntu machine</p>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>sudo kubeadm init \</p>
                            <p> --pod-network-cidr=10.10.0.0/16 \</p>
                            <p> --control-plane-endpoint=k8s-master.ubuntu</p>
                            <p> --ignore-preflight-errors=all</p>
                        </div>
                        <p className='px-4 '>Inside <strong className='text-md font-medium text-red-400 cursor-pointer'>10.10.0.0/16</strong> is the CIDR of pod network, you can replace on demand.</p>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>mkdir -p $HOME/.kube</p>
                            <p>sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config</p>
                            <p>sudo chown $(id -u):$(id -g) $HOME/.kube/config</p>
                        </div>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>kubectl cluster-info</p>
                            <p>kubectl get nodes</p>
                        </div>
                        <p className='px-2 text-lg'>Add worker node to the cluster</p>
                        <div className="max-w-4xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>sudo kubeadm join k8s-master.ubuntu:6443 --token dayj9y.g4dq24u6irkz4pt0 \</p>
                            <p> --discovery-token-ca-cert-hash sha256:58b9cc96ed57a5797fddea653756dbda830efbff55b720a10cffb3948d489148</p>
                        </div>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>kubectl get nodes -o wide</p>
                        </div>
                        <p className='px-2 text-lg'>Install Calico Pod Network for Kubernetes cluster</p>
                        <div className="max-w-3xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>curl https://raw.githubusercontent.com/projectcalico/calico/v3.25.0/manifests/calico.yaml -O</p>
                        </div>
                        <p className='px-4'>Open the newly downloaded file and find the section <strong className='text-md font-medium text-red-400 cursor-pointer'>CALICO_IPV4POOL_CIDR</strong></p>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>---</p>
                            <p># The default IPv4 pool to create on startup if none exists. Pod IPs will be</p>
                            <p># chosen from this range. Changing this value after installation will have</p>
                            <p># no effect. This should fall within `--cluster-cidr`.</p>
                            <p>- name: CALICO_IPV4POOL_CIDR</p>
                            <p>value: '10.10.0.0/16'</p>
                            <p># Disable file logging so `kubectl logs` works.</p>
                            <p>- name: CALICO_DISABLE_FILE_LOGGING</p>
                            <p>value: 'true'</p>
                        </div>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>kubectl apply -f calico.yaml</p>
                            <p>kubectl get pods -n kube-system</p>
                        </div>
                        <div className="max-w-xl bg-gray-200 m-4 text-red-400 italic p-4 rounded-lg">
                            <p>kubectl get pods -n kube-system</p>
                            <p>kubectl get nodes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kubeadm
