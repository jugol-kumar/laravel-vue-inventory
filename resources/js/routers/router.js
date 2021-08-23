import Vue from 'vue'
import VueRouter from "vue-router"
Vue.use(VueRouter);
let Login = require('../components/Auth/Auth').default;

import Dashboard from "../components/pages/Dashboard";
import Logout from "../components/Auth/Logout";

import AddEmployee from "../components/pages/employee/AddEmployee";
import ManageEmployee from "../components/pages/employee/ManageEmployee";
import EditEmployee from '../components/pages/employee/EditEmployee';

import AddSupplier from '../components/pages/supplier/Add'
import EditSupplier from '../components/pages/supplier/Edit'
import ManageSupplier from '../components/pages/supplier/Index'

import AddCategory from '../components/pages/category/Add'
import ManageCategory from '../components/pages/category/Index'
import EditCategory from '../components/pages/category/Edit'

import AddProduct from '../components/pages/product/Add'
import ManageProduct from '../components/pages/product/Index'
import EditProduct from '../components/pages/product/Edit'

import AddExpense from '../components/pages/expense/Add'
import ManageExpense from '../components/pages/expense/Index'
import EditExpense from '../components/pages/expense/Edit'

import AddCustomer from '../components/pages/customer/Add'
import ManageCustomer from '../components/pages/customer/Index'
import EditCustomer from '../components/pages/customer/Edit'

import AddSalary from '../components/pages/salary/Add'
import ManageSalary from '../components/pages/salary/Index'
import MonthSalary from '../components/pages/salary/MonthSalary'

import StokeManage from '../components/pages/product/Stoke'

import Pos from '../components/pages/pos/Index'

import TodayOrder from "../components/pages/order/TodayOrder";
import SearchOrder from "../components/pages/order/SearchOrder";

import FileUpload from '../components/pages/uploadfile/UploadFile';

import Dropzone from '../components/pages/media/Dropzone';


export default new VueRouter({
    mode:'history',
    routes:[
        //auth routes
        {
            path:'/',
            name:'Login',
            component:Login
        },
        {
            path:'/dashboard',
            name:'Dashboard',
            component:Dashboard
        },
        {
            path:'/logout',
            name:'Logout',
            component:Logout
        },

        //employee routes
        {
            path:'/add-employee',
            name:'AddEmployee',
            component: AddEmployee
        },
        {
            path:'/manage-employee',
            name:'ManageEmployee',
            component: ManageEmployee
        },
        {
            path:'/edit-employee/:id',
            name:'EditEmployee',
            component: EditEmployee
        },

        //supplier routes
        {
            path:'/add-supplier',
            name:'AddSupplier',
            component: AddSupplier
        },
        {
            path:'/manage-supplier',
            name:'ManageSupplier',
            component: ManageSupplier
        },
        {
            path:'/edit-supplier/:id',
            name:'EditSupplier',
            component: EditSupplier
        },

        //category routes
        {
            path:'/add-category',
            name:'AddCategory',
            component: AddCategory
        },
        {
            path:'/manage-category',
            name:'ManageCategory',
            component: ManageCategory
        },
        {
            path:'/edit-category/:id',
            name:'EditCategory',
            component: EditCategory
        },

        //product routes
        {
            path:'/add-product',
            name:'AddProduct',
            component: AddProduct
        },
        {
            path:'/manage-product',
            name:'ManageProduct',
            component: ManageProduct
        },
        {
            path:'/edit-product/:id',
            name:'EditProduct',
            component: EditProduct
        },

        //expense routes
        {
            path:'/add-expense',
            name:'AddExpense',
            component: AddExpense
        },
        {
            path:'/manage-expense',
            name:'ManageExpense',
            component: ManageExpense
        },
        {
            path:'/edit-expense/:id',
            name:'EditExpense',
            component: EditExpense
        },

        //salary routes
        {
            path:'/add-salary',
            name:'AddSalary',
            component: AddSalary
        },
        {
            path:'/manage-salary',
            name:'ManageSalary',
            component: ManageSalary
        },
        {
            path:'/month-salary/:id',
            name:'MonthSalary',
            component: MonthSalary
        },

        //customer routes
        {
            path:'/add-customer',
            name:'AddCustomer',
            component: AddCustomer
        },
        {
            path:'/manage-customer',
            name:'ManageCustomer',
            component: ManageCustomer
        },
        {
            path:'/edit-customer/:id',
            name:'EditCustomer',
            component: EditCustomer
        },

        //stoke route
        {
            path:'/stoke-manage',
            name: 'StokeManage',
            component: StokeManage
        },

        //pos route
        {
            path:'/pos',
            name: 'Pos',
            component: Pos
        },

        //order route

        {
            path:'/today-order',
            name:'TodayOrder',
            component: TodayOrder
        },
        {
            path:'/search-order',
            name:'SearchOrder',
            component: SearchOrder
        },

        //upload multiple files
        {
            path:'/upload-multiple-file',
            name:'FileUpload',
            component: FileUpload
        },

        //media route
        {
            path:'/dropzone',
            name:'DropZone',
            component: Dropzone
        },





    ]
});
