// eslint-disable-next-line react/prop-types
const Navigation = ({ children }) => {
    return (
        <section className="flex-1">
            <nav className='w-full p-2 flex flex-row justify-between border-b border-slate-900'>
                <span className='text-xl font-extrabold text-blue-500'>Mentor.AI</span>
                <div className='flex gap-4'>
                    <a href="/workspaces">Workspaces</a>
                    {/* <a href="/simulations">Simulations</a> */}
                    <a href="/interviews">Interviews</a>
                    <a href='/coding'>Coding Practice</a>
                </div>
            </nav>
            {children}
        </section>
    )
}

export default Navigation