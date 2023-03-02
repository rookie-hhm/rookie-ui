import Table from "@/components/Table";
import Pagination from "@/components/Pagination";
import Form from "@/components/Form";
import Select from "@/components/Select";
import Dialog from '@/components/Dialog'

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