import { CodeiumEditor } from "@codeium/react-code-editor"
import { useState } from "react"

// import { PythonProvider, usePython } from 'react-py'

const Coding = () => {

    const [code, setCode] = useState("# Start Coding Here")

    // const { runPython, stdout, stderr, isLoading, isRunning } = usePython()

    return (
        <div className="flex h-[90%] max-h-[96px]: pt-10 gap-5">
            <div className="flex-1 border border-slate-900 rounded-md p-5 text-left overflow-auto">
                <div className="text-md font-extrabold capitalize mb-2 text-blue-500">question #2</div>
                <div className="text-2xl font-bold mb-2">Maximum Subarray Sum</div>
                <div className="text-lg font-semibold">Problem Statement:</div>
                <p className="font-light text-md">Given an array of integers, find the maximum sum of any contiguous subarray. The subarray must contain at least one element.</p>
                <div className="text-lg font-semibold mt-5 mb-3">Example:</div>
                <p className="font-light text-md my-2">Input: <span className="p-1 border border-blue-400 bg-black rounded-md">[-2, 1, -3, 4, -1, 2, 1, -5, 4]</span></p>
                <p className="font-light text-md my-2"> Output: 6 (The subarray <span className="p-1 border border-blue-400 bg-black rounded-md">[4, -1, 2, 1]</span> has the maximum sum of 6.)</p>
                <div className="text-lg font-semibold mb-5">Constraints:</div>
                <ul className="list-disc text-md font-light ml-5">
                    <li>The input array can have both positive and negative integers.</li>
                    <li>The array length is between 1 and 10 <sup>5</sup></li>
                </ul>
                <div className="text-lg font-semibold mt-5 mb-3">Approach:</div>
                <p className="font-light text-md my-2">To solve this problem efficiently, you can use Kadane’s algorithm, which has a time complexity of O(n). It keeps track of the maximum subarray sum ending at each position and updates the global maximum as it traverses the array.
                    <br />
                    Remember to handle edge cases, such as when all elements are negative or when the array is empty.
                    <br />
                    Good luck with your interview preparation! </p>
            </div>
            {/* <PythonProvider> */}
            <div className="flex-1 border border-slate-900 rounded-md p-2 flex flex-col">
                <CodeiumEditor language="python" theme="vs-dark" value={code} onChange={setCode} />
                <div className="mt-5 flex flex-col border border-slate-900 rounded-md p-2 text-left">
                    <div className="text-md font-extrabold capitalize mb-2 text-blue-500 flex-1 text-left h-48">console</div>
                    <p className="italic font-extralight text-sm">{stdout || '...waiting to run code'}</p>
                </div>
                <div className="mt-3 flex gap-2">
                    <button onClick={() => {
                        // runPython(code)
                    }}>
                        Run Code
                    </button>
                    <button>
                        Submit
                    </button></div>

            </div>
            {/* </PythonProvider> */}

        </div>
    )
}

export default Coding