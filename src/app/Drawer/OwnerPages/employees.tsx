import GlobalReturnButton from '@/src/components/atoms/globalReturnButton';
import { EmployeeCard } from '@/src/components/organisms/EmployessComponents/employeeCard';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView, Text, View } from 'react-native';


export default function Employees() {

    const employees: any[] = []

    return (
        <ScrollView className='flex-1  ' >
            <View className='w-full'>
                <GlobalReturnButton route='home' />

            </View>
            {/* Emplooyes informations */}
            <View className='w-full h-[500px] gap-[30px] flex-row-reverse max-[900px]:flex-col items-center '>

                {/* employee Addition */}
                <View className='w-[200px] mr-[10px] cursor-pointer h-[320px] flex-col bg-blue-500 group/Addition rounded-[10px] items-center  '>
                    <Text className='text-[19pt] font-tintNeon text-white mt-[60px] '>Adição de{'\n'}Funcionários</Text>
                    <Ionicons name='add-circle' size={90} color={'white'} className='group-hover/Addition:animate-pulse duration-[600ms]' />
                </View>
                {/* Full Content (Employees cards) */}
                <View className=' w-full  justify-around items-center'>
                    {/*Employees Cards(Images, Name, function and more) */}
                    {employees.length === 0 ? (<Text className='text-[15pt] font-tintNeon font-bold'>Nenhum Funcionario cadastrado</Text>) : (employees.map((employees) => <EmployeeCard key={employees.id} />))}
                    {/* <EmployeeCard /> */}
                </View>
            </View>
        </ScrollView>
    );
}