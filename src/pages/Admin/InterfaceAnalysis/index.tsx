import {
  PageContainer,
} from '@ant-design/pro-components';
import '@umijs/max';

import EChartsReact from "echarts-for-react";
import {useState} from "react/index";
import {useEffect} from "react";
import {listTopInvokeInterfaceInfoUsingGET} from "@/services/tianCaiAPI/analysisInterfaceController";


const InterfaceAnalysis: React.FC = () => {
  const [data,setdata] = useState<API.InterfaceInfoVO[]>([]);
  const [loading,setloading] = useState(true);

  useEffect(() => {
    try {
      listTopInvokeInterfaceInfoUsingGET().then(res => {
        if (res.data) {
          setdata(res.data);
          setloading(false);
        }
      })
    } catch (e: any) {
    }
  },[])

  const chartData = data.map(item => {
    return{
      value: item.totalNum,
      name: item.name
    }
  })

  const option = {
    title: {
      text: '调用次数最多的接口TOP3',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: chartData,
      }
    ]
  };
  return (
    <PageContainer>
        <EChartsReact loadingOption={loading} option={option}/>
    </PageContainer>
  );
};
export default InterfaceAnalysis;
