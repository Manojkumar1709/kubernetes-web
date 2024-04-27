import React from 'react'
import { data } from '../data/data.js'
import { KubernetesPlain } from 'devicons-react'

const Commands = () => {
  return (
    <div>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="mb-6">
            <div>
              <div className="flex items-center">
                <KubernetesPlain />
                <span className="ml-3">Kubernetes commands</span>
              </div>
              <table className="w-full border-collapse border border-blue-500 max-w-full mt-4">
                <thead>
                  <tr className="bg-blue-500 text-white">
                    <th className="py-2 px-4 text-left">Command</th>
                    <th className="py-2 px-4 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.map((user) => (
                      <tr className="bg-white border-b border-blue-500">
                        <td className="py-2 px-4 text-red-400">{user.cmd}</td>
                        <td className="py-2 px-4">{user.desc}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className='border-b-2 mt-5'>
            </div>
            <div className='mt-4 px-3'>
              <p>kubectl controls the Kubernetes cluster manager.</p>
              <p>
                Find more information at :{' '}
                <a
                  href='https://kubernetes.io/docs/reference/kubectl/'
                  className="underline text-blue-500"
                >
                  https://kubernetes.io/docs/reference/kubectl/
                </a>
              </p>
              <p>
                Use <strong className='text-red-400'>'kubectl &lt;command&gt; --help'</strong> for more information about a given command.
              </p>
              <p>
                Use <strong className='text-red-400'>'kubectl options'</strong> for a list of global command-line options (applies to all commands).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Commands

// 




