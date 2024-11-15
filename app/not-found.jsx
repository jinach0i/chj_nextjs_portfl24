import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div class="text-center">
        <h2 class="text-base font-semibold text-indigo-600">최혜진의 포트폴리오</h2>
        <h1 class="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
          404
        </h1>
        <p class="my-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
        잘못된 페이지로 접속하였습니다. 상단의 페이지 주소를 확인해
        주세요.
        </p>
        <Link href="/" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">처음 페이지로</Link>
      </div>
      
    </div>
  );
}
