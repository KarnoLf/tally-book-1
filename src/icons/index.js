import Vue from 'vue'
import Svg from '@/components/Svg.vue'

Vue.component('v-icon',Svg)
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./',false,/\.svg$/)
requireAll(req)