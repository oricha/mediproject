import clsx from 'clsx'

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={clsx('border rounded-xl p-5 bg-white', className)}>{children}</div>
}

