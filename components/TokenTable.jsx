  import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

  export function TableDemo() {
    return (
      <Table className="bg-[#0F0F0F] border border-none">
        <TableHeader>
          <TableRow className="border-b border-gray-700">
            <TableHead className="px-10 py-2">#</TableHead>
            <TableHead className="px-4 py-2">Токен</TableHead>
            <TableHead className="px-4 py-2">Ціна</TableHead>
            <TableHead className="px-4 py-2">24h</TableHead>
            <TableHead className="px-4 py-2">Ринок</TableHead>
            <TableHead className="px-4 py-2">Торгівля</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="hover:bg-gray-700 border-b border-gray-700">
            <TableCell className="px-4 py-2">1</TableCell>
            <TableCell className="px-4 py-5">Ncoin</TableCell>
            <TableCell className="px-4 py-2">$51.03</TableCell>
            <TableCell className="px-4 py-2 text-red-500">-1.41%</TableCell>
            <TableCell className="px-4 py-2 text-green-500">+300.06 Ncoin</TableCell>
            <TableCell className="px-4 py-2"></TableCell>
          </TableRow>
          <TableRow className="hover:bg-gray-700 border-b border-gray-700">
            <TableCell className="px-4 py-2">2</TableCell>
            <TableCell className="px-4 py-5">Bcoin</TableCell>
            <TableCell className="px-4 py-2">$15.72</TableCell>
            <TableCell className="px-4 py-2 text-green-500">+2.01%</TableCell>
            <TableCell className="px-4 py-2 text-green-500">+150.25 Bcoin</TableCell>
            <TableCell className="px-4 py-2"></TableCell>
          </TableRow>
          <TableRow className="hover:bg-gray-700 border-b border-gray-700">
            <TableCell className="px-4 py-2">3</TableCell>
            <TableCell className="px-4 py-5">Ecoin</TableCell>
            <TableCell className="px-4 py-2">$25.65</TableCell>
            <TableCell className="px-4 py-2 text-red-500">-0.89%</TableCell>
            <TableCell className="px-4 py-2 text-green-500">+180.50 Ecoin</TableCell>
            <TableCell className="px-4 py-2"></TableCell>
          </TableRow>
          <TableRow className="hover:bg-gray-700 border-b border-gray-700">
            <TableCell className="px-4 py-2">4</TableCell>
            <TableCell className="px-4 py-5">Gcoin</TableCell>
            <TableCell className="px-4 py-2">$78.23</TableCell>
            <TableCell className="px-4 py-2 text-green-500">+4.55%</TableCell>
            <TableCell className="px-4 py-2 text-green-500">+400.00 Gcoin</TableCell>
            <TableCell className="px-4 py-2"></TableCell>
          </TableRow>
          <TableRow className="hover:bg-gray-700">
            <TableCell className="px-4 py-2">5</TableCell>
            <TableCell className="px-4 py-5">Lcoin</TableCell>
            <TableCell className="px-4 py-2">$32.10</TableCell>
            <TableCell className="px-4 py-2 text-red-500">-3.21%</TableCell>
            <TableCell className="px-4 py-2 text-green-500">+250.50 Lcoin</TableCell>
            <TableCell className="px-4 py-2"></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
