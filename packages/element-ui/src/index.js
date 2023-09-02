import Table from "@/components/table";
import Pagination from "@/components/pagination";
import Form from "@/components/form";
import Select from "@/components/select";
import Dialog from '@/components/dialog'

const components = [
  Table,
  Pagination,
  Form,
  Select,
  Dialog
]
export {
  Table,
  Pagination,
  Form,
  Select,
  Dialog
}

export default {
  install(_Vue) {
    components.forEach(component => {
      _Vue.component(component.name, component)
    })
  }
}